import {ExampleLanguage, ExampleSnippetType} from './examples';

export class SnippetResolver {
  // for this POC, here we define some hard-coded example snippets.  In the real, working version of this plugin,
  // there would be some code to pull this stuff from the sdk git repos.
  private readonly temporaryHardCodedCodeSnippets = new Map([
    [
      'example:typescript:code:ListCaches',
      'This snippet would be pulled from the node.js repo and contain sample code for listing caches in TS',
    ],
    [
      'example:go:description:Logging',
      'This snippet would be pulled from the go repo, and contain prose about logging support in our Golang SDK',
    ],
    [
      'example:go:code:Logging',
      'This snippet would be pulled from the go repo, and contain example code illustrating logging support.',
    ],
  ]);

  resolveSnippet(
    language: ExampleLanguage,
    snippetType: ExampleSnippetType,
    snippetId: string
  ): string {
    return (
      this.temporaryHardCodedCodeSnippets.get(
        `example:${language}:${snippetType}:${snippetId}`
      ) ?? ''
    );
  }
}
