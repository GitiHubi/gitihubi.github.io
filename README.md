# gitihubi.github.io

Personal website of Marco Schreyer, built with [Jekyll](https://jekyllrb.com/) on the [minima](https://github.com/jekyll/minima) theme and deployed via [GitHub Pages](https://pages.github.com/).

## Structure

| Path                 | Purpose                                                        |
| -------------------- | --------------------------------------------------------------- |
| `_config.yml`        | Site-wide settings (title, theme, plugins, analytics ID)        |
| `_includes/`         | Theme partials (head, header, footer, analytics, social links)  |
| `index.markdown`     | Home page: bio, news, publications, talks                       |
| `about.markdown`     | About page                                                       |
| `404.html`           | Custom 404 page                                                  |
| `assets/css/`        | Sass entry point that imports the `minima` theme                |
| `images/`            | Portrait, publication thumbnails, and partner logos              |

## Local development

Requires Ruby and Bundler (see `Gemfile.lock` for the exact bundler version).

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Deployment

Pushes to the default branch are built and published automatically by GitHub Pages — no manual build or deploy step is required.
