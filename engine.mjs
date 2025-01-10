import { Marp } from "@marp-team/marp-core";
import { createGenerator } from "@unocss/core";
import markdownItAttrs from "markdown-it-attrs";
import markdownItBracketedSpans from "markdown-it-bracketed-spans";
import markdownItContainer from "markdown-it-container";
import unoConfig from "./uno.config.mjs";

const unoGenerator = await createGenerator(unoConfig);

class UnoMarp extends Marp {
  async render(markdown, env) {
    const res = super.render(markdown, env);
    const { css: unoCss } = await unoGenerator.generate(res.html, {
      minify: true,
    });
    return {
      ...res,
      css: unoCss + res.css,
    };
  }
}

/**
 * @type {import('@marp-team/marp-cli').Config<typeof import('@marp-team/marpit').Marpit>["engine"]}
 */
export default async ({ marp: _marp, ...config }) => {
  const uno = new UnoMarp(config);

  return uno
    .use(markdownItBracketedSpans)
    .use(markdownItAttrs)
    .use(markdownItContainer, "", {
      // allow empty name
      validate: () => true,
      render: (tokens, idx) => {
        const _class = tokens[idx].info.trim();
        if (tokens[idx].nesting === 1) {
          // opening tag
          return `<div class="${_class}">\n`;
        }
        // closing tag
        return "</div>\n";
      },
    });
};
