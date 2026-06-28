#!/usr/bin/env python3
"""fal.ai image-generation agent for dubai-pet-relocation.ae.

Generates page-fitting images at the RIGHT quality tier (not always the most
expensive), downloads them, and optimizes to web-ready JPEG.

Key resolution order: $FAL_KEY  ->  repo-root .env.local (FAL_KEY=...).

Usage:
  python generate.py manifest.json                 # generate every entry
  python generate.py manifest.json --only hero-home,about-hero
  python generate.py manifest.json --dry           # print plan + est. cost only

Manifest = JSON list of entries:
  {
    "slug": "hero-home",
    "prompt": "photorealistic ...",
    "tier": "premium",          # fast | standard | premium
    "aspect": "16:9",           # 16:9 | 4:3 | 3:2 | 1:1 | 3:4
    "out": "website/public/images/hero-home.jpg"
  }

Tier -> model (quality matched to page importance):
  fast     fal-ai/flux/schnell      ~$0.003  decorative / low-stakes thumbnails
  standard fal-ai/flux/dev          ~$0.025  service & Dubai-area landing pages
  premium  fal-ai/flux-pro/v1.1     ~$0.04   homepage hero / top money pages
"""
import os, sys, json, time, io, urllib.request, urllib.error
from PIL import Image

MODELS = {
    "fast":     "fal-ai/flux/schnell",
    "standard": "fal-ai/flux/dev",
    "premium":  "fal-ai/flux-pro/v1.1",
}
EST_COST = {"fast": 0.003, "standard": 0.025, "premium": 0.04}
SIZES = {
    "16:9": "landscape_16_9", "3:2": {"width": 1536, "height": 1024},
    "4:3": "landscape_4_3", "1:1": "square_hd",
    "3:4": "portrait_4_3", "9:16": "portrait_16_9",
}
# Brand system prompt appended to every prompt for a consistent, premium look.
STYLE = (" Editorial photography, photorealistic, natural soft daylight, shallow "
         "depth of field, calm premium mood, no text, no watermark, no logos, "
         "no human faces, periwinkle and warm neutral palette, high detail, 4k.")

def load_key():
    k = os.environ.get("FAL_KEY")
    if k:
        return k.strip()
    here = os.path.dirname(os.path.abspath(__file__))
    for rel in ("../../.env.local", "../.env.local", "../../../.env.local"):
        p = os.path.normpath(os.path.join(here, rel))
        if os.path.exists(p):
            for line in open(p):
                if line.strip().startswith("FAL_KEY="):
                    return line.strip().split("=", 1)[1].strip()
    sys.exit("FAL_KEY not found (set env or repo-root .env.local)")

def generate(prompt, tier, aspect, key, seed=None, retries=3):
    model = MODELS.get(tier, MODELS["standard"])
    body = {
        "prompt": prompt + STYLE,
        "image_size": SIZES.get(aspect, "landscape_16_9"),
        "num_images": 1,
        "enable_safety_checker": True,
    }
    if tier != "fast":
        body["num_inference_steps"] = 30
        body["guidance_scale"] = 3.5
    if seed is not None:
        body["seed"] = seed
    data = json.dumps(body).encode()
    last = None
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(
                "https://fal.run/" + model, data=data,
                headers={"Authorization": "Key " + key, "Content-Type": "application/json"})
            with urllib.request.urlopen(req, timeout=180) as r:
                d = json.load(r)
            return d["images"][0]["url"]
        except urllib.error.HTTPError as e:
            last = f"HTTP {e.code}: {e.read()[:160].decode(errors='ignore')}"
        except Exception as e:
            last = str(e)
        time.sleep(3 * attempt)
    raise RuntimeError(f"generate failed after {retries}: {last}")

def optimize(raw, out, max_w=1600, quality=82):
    im = Image.open(io.BytesIO(raw)).convert("RGB")
    if im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    im.save(out, "JPEG", quality=quality, optimize=True, progressive=True)
    return os.path.getsize(out)

def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    manifest = json.load(open(sys.argv[1]))
    only = None
    dry = "--dry" in sys.argv
    if "--only" in sys.argv:
        only = set(sys.argv[sys.argv.index("--only") + 1].split(","))
    repo_root = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "../.."))
    key = None if dry else load_key()
    entries = [e for e in manifest if not only or e["slug"] in only]
    total = sum(EST_COST.get(e.get("tier", "standard"), 0.025) for e in entries)
    print(f"{len(entries)} image(s) | est. fal cost ~${total:.2f}")
    if dry:
        for e in entries:
            print(f"  [{e.get('tier','standard'):8}] {e['slug']:28} -> {e['out']}")
        return
    ok = fail = 0
    for e in entries:
        slug, out = e["slug"], os.path.join(repo_root, e["out"])
        try:
            url = generate(e["prompt"], e.get("tier", "standard"),
                           e.get("aspect", "16:9"), key, e.get("seed"))
            with urllib.request.urlopen(url, timeout=90) as r:
                raw = r.read()
            size = optimize(raw, out, e.get("max_w", 1600), e.get("quality", 82))
            ok += 1
            print(f"  OK  {slug:28} {size//1024:>5} KB  {e.get('tier','standard')}")
        except Exception as ex:
            fail += 1
            print(f"  ERR {slug:28} {ex}")
    print(f"done: {ok} ok, {fail} failed")

if __name__ == "__main__":
    main()
