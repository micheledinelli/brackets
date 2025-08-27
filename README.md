# Brackets

<div align=center>

[![hugo](https://img.shields.io/badge/hugo-v0.148.2-FF4088?logo=Hugo)](https://gohugo.io/)
[![sass](https://img.shields.io/badge/sass-latest-CC6699?logo=Sass)](https://sass-lang.com/)

<img src="logo.png" alt="brackets logo" width="250">
</div>

Brackets is a simple [hugo](https://gohugo.io/) theme, light and customizable.

## Getting started 

### Using Git Submodules (recommended)

Create a new Hugo site:

```bash
hugo new site my-hugo-site
```

Add the theme as git submodule:

```bash
git submodule add --depth=1 https://github.com/micheledinelli/brackets.git themes/brackets
```

Edit `hugo.toml` to set the theme and add some content:

```toml
baseUrl = 'https://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'
theme = 'brackets'

enableGitInfo = true

[params]
    name= "My New Hugo Site"

[menus.main]
    [[menu.main]]
        name = "Home"
        url = "/"
        weight = 1

    [[menu.main]]
        name = "About"
        url = "/about/"
        weight = 2

    [[menu.main]]
        name = "Contact"
        url = "/contact/"
        weight = 3
    
    [[menu.main]]
        name = "Blog"
        url = "/blog/"
        weight = 4
```

## Customization

To override `theme.scss` create a file `assets/sass/theme.scss` and modify theme variables. For example the following code will modify the accent color from blue to green. Default values are the ones commented.

```scss
:root {
    //   --font-family: "Geist", monospace;
    //   --font-family-mono: "Geist Mono", monospace;

    //   --background-color: #f5f5f5;
    //   --text-color: #121212;

    // --accent-color: blue;
    --accent-color: green;
    //   --muted-color: #a0a0a0;
}
```

### Parameters
The theme supports a few parameters. For example you may want to hide the footer or show an avatar image. Please refer to this sample `.toml` file.

```toml
baseURL = 'https://example.com'
languageCode = 'en-us'
title = 'My New Hugo Site'
theme = 'brackets'

enableGitInfo = true

[params]
  name = 'My New Hugo Site'
  # avatar = images/<image-path>

  [params.footer]
    # hide = true
    # hideCopyright = true
    # hidePoweredBy = true
    # hideSocial = true
    # hideBuild = true

  [params.social]
    # github = <url>
    # x = <url>
    # linkedin = <url>

[menus]
  [[menus.main]]
    name = ' / '
    pageRef = '/'
    weight = 10
```

### Math Mode, Front Matter ecc...

To enable math mode add `math: true` in the front matter of your markdown file. This will trigger [Katex](https://katex.org/) rendering.

```md
---
date: "2025-07-30T18:00:01+02:00"
title: ""
math: true
---
```

To hide meta information such as commit, summary and reading time use `showMeta`:

```md
---
date: "2025-07-30T18:00:01+02:00"
title: ""
showMeta: false
---
```

To hide only any of summary, reading time or commit info use `showSummary`, `showReadingTime` and `showCommit`:

```md
---
date: "2025-07-30T18:00:01+02:00"
title: ""
showSummary: false
showReadingTime: false
showCommit: false
---