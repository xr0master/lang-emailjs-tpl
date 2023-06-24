import { parser } from './syntax.grammar';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@lezer/highlight';

export const mustacheLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Identifier: tags.atom,
        Comment: tags.blockComment,
        'ListTag StartSectionTag CloseSectionTag EndSectionTag': tags.keyword,
        'OpenTag CloseTag OpenUnsafeTag CloseUnsafeTag': tags.keyword,
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
