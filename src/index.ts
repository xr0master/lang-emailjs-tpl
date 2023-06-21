import { parser } from './syntax.grammar';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@lezer/highlight';

export const mustacheLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Identifier: tags.variableName,
        BlockComment: tags.blockComment,
        CodeTag: tags.keyword,
        '{{ }} {{{ }}} {{& }}': tags.meta,
      }),
    ],
  }),
  languageData: {
    commentTokens: {
      block: {
        open: '{{!',
        close: '}}',
      },
    },
  },
});

export function mustache() {
  return new LanguageSupport(mustacheLanguage);
}
