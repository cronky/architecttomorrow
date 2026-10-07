source "https://rubygems.org"

# Plain Jekyll 4 rather than the github-pages gem: newer, faster, and what Cloudflare Pages
# and Siteleaf build with. Only plugins that Cloudflare can install from rubygems are used.
gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
end

# Needed on Ruby 3.4+ (no longer bundled) and for `jekyll serve`
gem "webrick"
gem "csv"
gem "base64"
gem "bigdecimal"
