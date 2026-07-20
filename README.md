# Marco Schreyer — Personal Site

[![Jekyll](https://img.shields.io/badge/built%20with-Jekyll-cc0000?logo=jekyll&logoColor=white)](https://jekyllrb.com/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/deployed%20on-GitHub%20Pages-222?logo=github)](https://pages.github.com/)
[![Live site](https://img.shields.io/badge/live-gitihubi.github.io-blue)](https://gitihubi.github.io)

My personal homepage — bio, publications, talks, and teaching, all on artificial intelligence for accounting and auditing. Built with [Jekyll](https://jekyllrb.com/) and the [minima](https://github.com/jekyll/minima) theme, hosted for free on [GitHub Pages](https://pages.github.com/).

## Project structure

```
.
├── _config.yml       # Site settings: title, theme, plugins, analytics ID
├── _includes/        # Theme partials: head, header, footer, analytics, social links
├── index.markdown    # Home page: bio, news, publications, talks
├── about.markdown    # About page
├── 404.html          # Custom 404 page
├── assets/css/       # Sass entry point importing the minima theme
└── images/           # Portrait, publication thumbnails, partner logos
```

## Getting started

Requires Ruby and Bundler (see `Gemfile.lock` for the exact bundler version).

```bash
bundle install
bundle exec jekyll serve
```

Then open [`localhost:4000`](http://localhost:4000) to preview changes live.

## Deployment

Fully automatic — GitHub Pages builds and publishes on every push to the default branch. No manual build or deploy step needed.

## Let's connect

[GitHub](https://github.com/gitihubi) · [Google Scholar](https://scholar.google.com/citations?user=O6V5YkEAAAAJ&hl=en) · [LinkedIn](https://www.linkedin.com/in/marco-schreyer)
