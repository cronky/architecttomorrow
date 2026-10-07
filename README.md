# Architect Tomorrow

Source for the Architect Tomorrow podcast, newsletter and community website: a [Jekyll](https://jekyllrb.com/) 4 site, hosted on Cloudflare Pages, editable with [Siteleaf](https://www.siteleaf.com/) or any text editor.

- Home page (light hero; add `?hero=green` to preview the green one, kept for a future dark mode), [episodes](episodes/index.html), newsletter [articles](articles/index.html) (`_articles/`) and [archive](archive/index.html) (`_archive/`), [resources](resources/index.html) and [community](community/index.html) (about, get involved)
- The original colour and logo experiments live at `/vibed-brand-playground/`

## Run it locally

You need Ruby 3.1 or later (`ruby -v`). On macOS the system Ruby is too old, so use [rbenv](https://github.com/rbenv/rbenv) or Homebrew (`brew install ruby`).

```sh
git fetch origin
git checkout claude/vibrant-shannon-1fc5qb
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000/>. Pages to check: `/`, `/episodes/`, `/articles/`, `/archive/`, `/vibed-brand-playground/`.
If `bundle exec jekyll` says the executable is missing, run `bundle install` again or use `bundle exec ruby -S jekyll serve`.

## Cloudflare Pages settings

| Setting | Value |
| --- | --- |
| Framework preset | Jekyll |
| Build command | `bundle exec jekyll build` (the preset's plain `jekyll build` also works) |
| Output directory | `_site` |
| Environment variable | `JEKYLL_ENV=production` |
| Environment variable (optional) | `RUBY_VERSION=3.2.2` (the v2 build image default, per [Cloudflare's Jekyll guide](https://developers.cloudflare.com/pages/how-to/deploy-a-jekyll-site)) |

The old setup used the `github-pages` gem, which pins Jekyll 3.9 and a theme. This site uses plain Jekyll 4 with `jekyll-seo-tag`, `jekyll-sitemap` and `jekyll-feed`, all installable on Cloudflare. `_headers` (security headers and caching) is picked up by Cloudflare Pages automatically. Set `url:` in `_config.yml` to the live domain.

## Editing with Siteleaf

Connect the repository in Siteleaf. It reads the collections in `_config.yml` (Articles, Archive) and lets you edit their front matter and Markdown, plus the data files in `_data/` (`socials.yml`, `episodes.yml`). Commits go to GitHub, and Cloudflare rebuilds as usual.

## Content workflow

| Task | How |
| --- | --- |
| Add an article | New file in `_articles/` named `YYYY-MM-DD-slug.md` with `title`, `date`, `excerpt` and optionally `linkedin_url` front matter |
| Re-import the LinkedIn exports in `sourcematerial/` | `pip install beautifulsoup4 lxml markdownify` then `python3 scripts/import_linkedin.py` (overwrites `_articles/` and `_archive/`) |
| Download article images locally (smaller, no expiring links) | `pip install pillow` then `python3 scripts/localise_images.py` |
| Edit community leads | `_data/people.yml` (optional `role`, `bio`, `url`, `photo`) |
| Add resources, diagrams or notable articles | `_data/library.yml`; shown on `/resources/` |
| Refresh podcast episodes | `python3 scripts/update_episodes.py`, or let `.github/workflows/update-episodes.yml` do it weekly |

## Where can you find Architect Tomorrow?
- [YouTube channel](https://youtube.com/ArchitectTomorrow/)
- [LinkedIn newsletter](https://www.linkedin.com/newsletters/architect-tomorrow-6864159042021949440/)
- [Spotify](https://open.spotify.com/show/4QDEGzABgnQAsLep944Fsu) and [Apple Podcasts](https://podcasts.apple.com/us/podcast/architect-tomorrow/id1542490113)
- [LinkedIn page](https://www.linkedin.com/company/architect-tomorrow/) and the hashtag #ArchitectTomorrow
