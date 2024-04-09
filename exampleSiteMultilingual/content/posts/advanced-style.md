+++
author = "Hugo Authors"
title = "Advanced Style"
date = "2024-04-09"
description = "Guide to advanced usage of Anubis2"
tags = [
    "emoji",
]
+++

<div class="anubis-custom-style">
The custom <code>.css</code> <code>.scss</code> <code>.sass</code> file should be placed in <code>assets/</code> folder. (instead of <code>static/</code>)
</div>

This page is affected by `assets/css/custom1.scss` and `assets/css/custom2.css`

## How to use PoseCSS

First, make sure your Hugo version supports Hugo Pipes. Hugo Pipes is available in Hugo `0.46` and later versions.

Then, add the following content to your Hugo configuration file (such as config.toml) to enable PostCSS:

```toml
[build]
  writeStats = true

[params]
  usePostCSS = true
```

In addition, you need to create a postcss.config.js file in the root directory of your project, with the following content:

```js
module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-url')(),
    require('autoprefixer')(),
    // Add more PostCSS plugins here if needed
  ]
};
```
