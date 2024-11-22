# Anubis2 Theme for Hugo [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![Netlify Status](https://api.netlify.com/api/v1/badges/750dfb45-73dc-4a96-8920-e701e0196959/deploy-status)](https://app.netlify.com/sites/hugo-theme-anubis2/deploys)

Anubis2 is another simple minimalist theme for [Hugo blog engine](https://gohugo.io/), check our [Demo](https://www.junyi.dev/).

![image](https://github.com/Junyi-99/hugo-theme-anubis2/assets/14367694/8d9a591b-e168-4328-a770-eb2e8f04f657)

|                                                        Light                                                         |                                                     Dark (Code)                                                      |                                                     Dark (Math)                                                      |
| :------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| <img width="1166" alt="demo1" src="https://github.com/user-attachments/assets/dbdd43bc-3efe-4fdf-ab8f-f20af2cf9229"> | <img width="1112" alt="demo3" src="https://github.com/user-attachments/assets/7356ef18-00c7-44c9-91d9-0dfb9b500910"> | <img width="1166" alt="demo2" src="https://github.com/user-attachments/assets/46e19440-b054-4df9-968b-7920d74f3d80"> |


> [!IMPORTANT]  
> **Update Your Blog Configuration**  
> Please ensure your blog configuration file (`hugo.toml`, `hugo.yaml`, or `hugo.json`) is updated to the latest version provided with the template.
> 
> **Hugo frequently changes its configuration file structure**, which may lead to compatibility issues if your configuration is outdated.
>
> Check the [Anubis2 template](https://github.com/Junyi-99/hugo-theme-anubis2/tree/main/exampleSiteMultilingual) for the latest config file.  



## Highlighted Features

- Multilingual
- Dark / Light mode (Automatic switch based on system settings)
- Table of Contents
- Comment Support (Giscus, Disque, ISSO, Utterances, GraphComment)
- Analytics (Google, Umami)
- RSS feeds
- Mobile Support
- [Full Features](wiki/Full-Features)

## Installation & Configuration

You need to install an extended version of Hugo to run this theme.

For more information read the [official setup guide of Hugo](https://gohugo.io/installation/).

### Install theme as Git Submodule

Inside the folder of your Hugo site, run:

```bash
git submodule add https://github.com/Junyi-99/hugo-theme-anubis2.git themes/anubis2
```

That's all, let's configure anubis2.

### Configure your site

Don't be panic, configure Anubis2 is really **simple**.

**This is the minimum configuration:**

```toml
baseURL = "https://hugo-theme-anubis2.netlify.app/"
languageCode = "en-us"
theme = "anubis2"
title = "Anubis2 Demo Site"

[params.author]
name = "Junyi"

[markup.goldmark.renderer]
unsafe = true # true | false; Enable unsafe mode to have a better experience

[markup.highlight]
style = 'base16-snazzy' # Chroma style, find more at here: https://swapoff.org/chroma/playground/

```

You are encouraged keeping other fields as defaults and fine-tune them when you have time! (see [Full Configuration Examples](https://github.com/Junyi-99/hugo-theme-anubis2/wiki/Configuration-Example))

In the other way, you can check out the example site's [configuration file](exampleSiteMultilingual/hugo.toml)

## Run your site

In order to see your site, run Hugo's built-in local server.

```bash
hugo server
```

Now enter [`http://localhost:1313`](http://localhost:1313/) in the address bar of your browser to open your site.

## Update Anubis2 to the latest version

In your Hugo site folder, run this command:

```bash
git submodule update --remote
```

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/Junyi-99/hugo-theme-anubis2/issues) or make a PR.

## License

MIT © Junyi, 2024
