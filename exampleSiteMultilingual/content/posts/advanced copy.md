+++
author = "Hugo Authors"
title = "Usage of code, pre, kbd"
date = "2024-04-09"
description = "Guide to advanced usage of Anubis2"
tags = [
    "emoji",
]
+++


## \<code\>

<code>Direct Code</code>

`A verrrrrryyyyy llloooonnnggg coooodeeee`

`code` `is` `here`

```plain
multiline
code
here
```

```typescript
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

## \<pre\>

<pre>pre text</pre>
<pre>pre text</pre>
<pre>pre text</pre>

## \<kbd\>


<p>Press <kbd>CTRL</kbd> + <kbd>C</kbd> to copy text (Windows).</p>

<p>Press <kbd>CMD</kbd> + <kbd>C</kbd> to copy text (Mac OS).</p>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

<pre>Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.</pre>
