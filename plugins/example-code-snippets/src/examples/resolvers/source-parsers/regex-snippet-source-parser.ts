import {SnippetSourceParser} from './snippet-source-parser';
import {ExampleSnippetId, ExampleSnippetType} from '../../examples';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as fs from 'fs';

export interface RegexSnippetTypeOptions {
  sourceFiles: Array<string>;
  startRegex: (snippetId: ExampleSnippetId) => RegExp;
  endRegex: (snippetId: ExampleSnippetId) => RegExp;
}

export interface RegexSnippetSourceParserOptions {
  snippetTypeParseOptions: Map<ExampleSnippetType, RegexSnippetTypeOptions>;
}

export class RegexSnippetSourceParser implements SnippetSourceParser {
  private readonly snippetTypeParseOptions: Map<
    ExampleSnippetType,
    RegexSnippetTypeOptions
  >;
  private readonly snippetTypeContent: Map<ExampleSnippetType, Array<string>>;

  constructor(options: RegexSnippetSourceParserOptions) {
    this.snippetTypeParseOptions = options.snippetTypeParseOptions;
    this.snippetTypeContent = new Map();
    for (const [
      snippetType,
      snippetOptions,
    ] of this.snippetTypeParseOptions.entries()) {
      // console.log(fs.readFileSync('/etc/hosts').toString());

      // this.snippetTypeContent.set(
      //   snippetType,
      //   snippetOptions.sourceFiles
      //     .map(f => fs.readFileSync(f).toString())
      //     .join('\n')
      //     .split('\n')
      // );
      console.log(snippetOptions);
      console.log(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Loaded content for snippet type ${snippetType}: ${this.snippetTypeContent
          .get(snippetType)
          ?.join('\n')}`
      );
    }
  }
  parseSourceForSnippet(
    snippetType: ExampleSnippetType,
    snippetId: ExampleSnippetId
  ): string | undefined {
    return undefined;
    //   const options = this.snippetTypeParseOptions.get(snippetType);
    //   if (options === undefined) {
    //     return undefined;
    //   }
    //
    //   const startRegex = options.startRegex(snippetId);
    //   // const endRegex = options.endRegex(snippetId);
    //
    //   const content = this.snippetTypeContent.get(snippetType);
    //   if (content === undefined) {
    //     return undefined;
    //   }
    //
    //   const contentLinesIterator = content[Symbol.iterator]();
    //
    //   let nextLine = contentLinesIterator.next();
    //   while (!nextLine.done) {
    //     const line = nextLine.value;
    //     if (line.match(startRegex)) {
    //       console.log(`Found match for starting regex:\n${line}`);
    //       // return this.captureUntilEndOfSnippet(contentLinesIterator, endRegex);
    //       return undefined;
    //     }
    //     nextLine = contentLinesIterator.next();
    //   }
    //
    //   return undefined;
  }

  // private captureUntilEndOfSnippet(
  //   remainingLines: IterableIterator<string>,
  //   endRegex: RegExp
  // ): string | undefined {
  //   const result = [];
  //   let nextLine = remainingLines.next();
  //   while (!nextLine.done) {
  //     const line = nextLine.value;
  //     if (line.match(endRegex)) {
  //       console.log(
  //         `Found match for end regex!  Returning result:\n${result.join('\n')}`
  //       );
  //       return result.join('\n');
  //     }
  //     result.push(line);
  //     nextLine = remainingLines.next();
  //   }
  //   return undefined;
  // }
}
