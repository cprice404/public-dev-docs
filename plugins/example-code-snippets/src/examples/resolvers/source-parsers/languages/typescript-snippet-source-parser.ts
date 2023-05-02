import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class TypescriptSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const codeSnippetFiles: Array<string> = [
      // TODO
      // TODO
      // TODO TODO TODO EXPLAIN
      // TODO
      // TODO
      // 'examples/doc-examples-ts-apis.ts',
    ];
    super({
      snippetTypeParseOptions: new Map<
        ExampleSnippetType,
        RegexSnippetTypeOptions
      >([
        [
          ExampleSnippetType.CODE,
          {
            sourceFiles: codeSnippetFiles.map(f => path.join(repoSourceDir, f)),
            startRegex: snippetId =>
              new RegExp(`^async function example_${snippetId.valueOf()}\\(`),
            endRegex: () => /^}/,
            numLeadingSpacesToStrip: 2,
          },
        ],
      ]),
    });
  }
}
