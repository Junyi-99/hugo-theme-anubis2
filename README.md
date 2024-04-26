# Anubis2 Theme for Hugo [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![Netlify Status](https://api.netlify.com/api/v1/badges/750dfb45-73dc-4a96-8920-e701e0196959/deploy-status)](https://app.netlify.com/sites/hugo-theme-anubis2/deploys)

Anubis2 is another simple minimalist theme for [Hugo blog engine](https://gohugo.io/), check our [Demo](https://www.junyi.dev/).

> 📝 Please note that anubis2 is under active maintenance, so please REMEMBER to keep your theme up to date!
>

![image](https://github.com/Junyi-99/hugo-theme-anubis2/assets/14367694/8d9a591b-e168-4328-a770-eb2e8f04f657)

## Highlighted Features

- Multilingual
- Dark / Light mode
- Table of Contents
- Comment Support (Giscus, Disque, ISSO, Utterances, GraphComment)
- Analytics (Google, Umami)
- RSS feeds
- Mobile Support

## Installation

You need to install an extended version of Hugo to run this theme.

### As Git Submodule

Inside the folder of your Hugo site run:

    $ git submodule add https://github.com/Junyi-99/hugo-theme-anubis2.git themes/anubis2

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

### Configure your site

Don't be panic, configure Anubis2 is relatively simple.

**This is the minimum configuration:**

```toml
baseURL = "https://hugo-theme-anubis2.netlify.app/"
languageCode = "en-us"
theme = "anubis2"
title = "Anubis2 Demo Site"

[author]
name = "Junyi"

[markup.goldmark.renderer]
unsafe = true # true | false; Enable unsafe mode to have a better experience

[markup.highlight]
style = 'base16-snazzy' # Highlight.js style
```

It's not too late to keep the other fields as defaults and fine-tune them when you have time! (see [Configuration Example](https://github.com/Junyi-99/hugo-theme-anubis2/wiki/Configuration-Example))

### Run your site

In order to see your site in action, run Hugo's built-in local server.

`$ hugo server`

Now enter [`localhost:1313`](http://localhost:1313/) in the address bar of your browser.

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/Junyi-99/hugo-theme-anubis2/issues) or make a PR.

## License
MIT © Junyi, 2024
