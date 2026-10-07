#!/usr/bin/env python3
"""Convert LinkedIn article exports in sourcematerial/ into Jekyll Markdown.

Usage: python3 scripts/import_linkedin.py

Sorting rules (edit ARTICLE_EXTRA / EXCLUDE below to change decisions):
  * Part of the "Architect Tomorrow" LinkedIn newsletter series -> _articles/
  * Pre-series but explicitly Architect Tomorrow branded       -> _articles/ (ARTICLE_EXTRA)
  * Other architecture / tech posts (any date)                  -> _archive/
  * Off-topic (personal, LinkedIn tips)                         -> skipped (EXCLUDE)
"""
import glob, html, os, re, sys
from bs4 import BeautifulSoup
from markdownify import markdownify

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "sourcematerial")

ARTICLE_EXTRA = {"architect-tomorrow-shaping-future", "architect-advent"}
EXCLUDE = {"staying-positive-2019", "business-social-getting-best-out-linkedin"}


def slugify(s):
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return "-".join(s.split("-")[:9])


def yq(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def convert(path):
    soup = BeautifulSoup(open(path, encoding="utf-8").read(), "lxml")
    h1 = soup.find("h1")
    title = html.unescape(h1.get_text(strip=True))
    url = h1.find("a")["href"] if h1.find("a") else ""
    pub = re.search(r"Published on (\d{4}-\d{2}-\d{2} \d{2}:\d{2})", soup.get_text())
    date = pub.group(1) if pub else re.search(r"Created on (\d{4}-\d{2}-\d{2} \d{2}:\d{2})", soup.get_text()).group(1)
    series = soup.find(class_="series-title")
    body = soup.find("p", class_="published").find_next_sibling("div")
    for ifr in body.find_all("iframe"):
        p = soup.new_tag("p")
        a = soup.new_tag("a", href=url)
        a.string = "Embedded LinkedIn content: view it on the original article"
        p.append(a)
        (ifr.parent if ifr.parent is not body else ifr).replace_with(p)
    for img in body.find_all("img"):
        img.attrs = {k: v for k, v in img.attrs.items() if k in ("src", "alt")}
        img["alt"] = img.get("alt") or ""
    for a in body.find_all("a"):
        if a.get("href", "").rstrip("/") in ("https://www.linkedin.com/feed/#", "#"):
            a.unwrap()
        else:
            href = a.get("href", "")
            if "linkedin.com/in/" in href:
                href = href.split("?")[0]
            a.attrs = {"href": href}
    md = markdownify(str(body), heading_style="ATX", bullets="-")
    md = re.sub(r"\n{3,}", "\n\n", md).replace("​", "").strip()
    if "sleepwalking-risks-v2" in path:  # diagram lives in this repo, so use it directly
        raw = "https://raw.githubusercontent.com/cronky/architecttomorrow/8a0863b9d8c2a26951dca17f31db6c1f5c86d014/assets/images/sleepwalkingrisksv2.svg"
        local = "{{ '/assets/images/sleepwalkingrisksv2.svg' | relative_url }}"
        md = re.sub(r"!\[\]\(https://media\.licdn\.com[^)]*\)\]\(" + re.escape(raw) + r"\)",
                    "![Diagram: nine AI sleepwalking risks]({})]({})".format(local, local), md)
        md = md.replace(raw, local)
    first = next(p for p in md.split("\n\n") if re.match(r"[A-Za-z0-9\"'*]", p))
    text = re.sub(r"\s+", " ", re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", first)).replace("*", "")
    excerpt = text if len(text) <= 200 else text[:200].rsplit(" ", 1)[0].rstrip(",.;:") + "…"
    return title, url, date, bool(series), md, excerpt


def main():
    for d in ("_articles", "_archive"):
        os.makedirs(os.path.join(ROOT, d), exist_ok=True)
        for f in glob.glob(os.path.join(ROOT, d, "*.md")):
            os.remove(f)
    counts = {"articles": 0, "archive": 0, "skipped": 0}
    for path in sorted(glob.glob(os.path.join(SRC, "*.html"))):
        base = os.path.basename(path)
        title, url, date, in_series, md, excerpt = convert(path)
        if any(base.startswith(x) for x in EXCLUDE):
            counts["skipped"] += 1
            print("skip   ", title)
            continue
        is_article = in_series or any(base.startswith(x) for x in ARTICLE_EXTRA)
        coll = "_articles" if is_article else "_archive"
        counts["articles" if is_article else "archive"] += 1
        slug = slugify(title)
        fm = ["---", f"title: {yq(title)}", f"date: {date}:00 +0000", f"excerpt: {yq(excerpt)}",
              f"linkedin_url: {url}"]
        fm += ["---", ""]
        out = os.path.join(ROOT, coll, f"{date[:10]}-{slug}.md")
        open(out, "w", encoding="utf-8").write("\n".join(fm) + md + "\n")
    print(counts)


if __name__ == "__main__":
    sys.exit(main())
