---
theme: default
paginate: true
image: https://marp-uno.pages.dev/index.jpg
---

# Marpuno

:::flex items-center gap-2

![Marp logo](https://marp.app/assets/marp.svg){.h-28}

×{.text-24}

![UnoCSS logo](https://unocss.dev/logo.svg){.h-28}

UnoCSS{.text-16}

:::

```md
You can use [UnoCSS]{.c-zinc-3} in [Marp]{.c-cyan-2} :tada: {.c-white .p-4 .rounded-full .bg-cyan-950 .text-center}
```

↓ Styled with UnoCSS []{.i-material-symbols:format-paint-outline-rounded .inline-block .size-1lh .align-text-bottom}

You can use [UnoCSS]{.c-zinc-3} in [Marp]{.c-cyan-2} :tada: {.c-white .p-4 .rounded-full .bg-cyan-950 .text-center}

---

::::grid grid-cols-2 gap-4 items-center
:::

# What is Marp?

Marp is the **Mar**{.c-cyan-8 .underline}kdown **P**{.c-cyan-8 .underline}resentation Ecosystem. It provides an intuitive experience for creating beautiful slide decks. You only have to focus on writing your story in a Markdown document.

:::
:::

## How to write slides

Split pages by horizontal ruler (`---`). It's very simple! :satisfied:

```markdown
# Slide 1

foobar

---

# Slide 2

foobar
```

:::
::::

---

::::grid grid-cols-2 gap-4 items-center
:::

# What is UnoCSS?

UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.

:::
:::

For example, you could define your custom CSS utilities, by providing rules in your local config file.

```ts
export default defineConfig({
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
})
```

:::
::::

---

# What is Marpuno?

::::::grid grid-cols-2 gap-4 items-center
:::::

Marpuno is a Marp project template that integrates UnoCSS.
It allows you to use UnoCSS utilities in your Marp slide decks.

:::::
:::::

````md
# What is Marpuno?

::::grid grid-cols-2 gap-4 items-center
:::

Marpuno is a Marp project template that integrates UnoCSS.
It allows you to use UnoCSS utilities in your Marp slide decks.

:::
:::

Now I'm on the right side of the slide.

:::
::::
````

:::::
::::::
