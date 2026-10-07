#!/usr/bin/env python3
"""Download LinkedIn-hosted article images into assets/images/articles/ as small WebP files.

LinkedIn image URLs carry expiring tokens, so run this soon after importing:
    pip install pillow
    python3 scripts/import_linkedin.py     # only if the export has been refreshed
    python3 scripts/localise_images.py

Images that cannot be fetched are left as-is and reported.
"""
import glob, io, os, re, sys, urllib.request
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "images", "articles")
PAT = re.compile(r"!\[([^\]]*)\]\((https://media\.licdn\.com/[^)\s]+)\)")
MAX_W = 1200


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def main():
    os.makedirs(OUT, exist_ok=True)
    failed = 0
    for md_path in sorted(glob.glob(os.path.join(ROOT, "_articles", "*.md")) + glob.glob(os.path.join(ROOT, "_archive", "*.md"))):
        text = open(md_path, encoding="utf-8").read()
        stem = os.path.splitext(os.path.basename(md_path))[0][11:]
        n = 0

        def repl(m):
            nonlocal n, failed
            n += 1
            name = f"{stem}-{n}.webp"
            dest = os.path.join(OUT, name)
            try:
                if not os.path.exists(dest):
                    im = Image.open(io.BytesIO(fetch(m.group(2))))
                    if im.width > MAX_W:
                        im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
                    im.convert("RGBA" if im.mode in ("RGBA", "P", "LA") else "RGB").save(dest, "WEBP", quality=80, method=6)
            except Exception as e:  # noqa: BLE001
                failed += 1
                print(f"FAILED {os.path.basename(md_path)} image {n}: {e}", file=sys.stderr)
                return m.group(0)
            return f"![{m.group(1)}]({{{{ '/assets/images/articles/{name}' | relative_url }}}})"

        new = PAT.sub(repl, text)
        if new != text:
            open(md_path, "w", encoding="utf-8").write(new)
    print("done;", failed, "failed")


if __name__ == "__main__":
    main()
