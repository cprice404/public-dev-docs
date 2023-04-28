import {SnippetResolver} from '../snippet-resolver';
import {
  ExampleLanguage,
  ExampleSnippetId,
  ExampleSnippetType,
} from '../examples';
import {SdkSourceProvider} from '../sdk-source/sdk-source-provider';
import {SdkGithubRepoSourceProvider} from '../sdk-source/sdk-github-repo-source-provider';
import {Sdk} from '../sdk-source/sdks';

export class SdkRepoSnippetResolver implements SnippetResolver {
  private readonly sourceProvider: SdkSourceProvider =
    new SdkGithubRepoSourceProvider();
  private readonly cachedSourceDirs = new Map<Sdk, string>();

  resolveSnippet(
    language: ExampleLanguage,
    snippetType: ExampleSnippetType,
    snippetId: ExampleSnippetId
  ): string | undefined {
    const sdk = sdkForLanguage(language);
    const dir = this.sourceDir(sdk);
    console.log(`Source dir for language '${language}' is: '${dir}'`);
    return undefined;
  }

  private sourceDir(sdk: Sdk): string {
    if (!this.cachedSourceDirs.has(sdk)) {
      this.cachedSourceDirs.set(sdk, this.sourceProvider.sdkSourceDir(sdk));
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.cachedSourceDirs.get(sdk)!;
  }
}

function sdkForLanguage(language: ExampleLanguage): Sdk {
  switch (language) {
    case ExampleLanguage.TYPESCRIPT:
      return Sdk.NODEJS;
    case ExampleLanguage.JAVASCRIPT:
      return Sdk.NODEJS;
    case ExampleLanguage.CSHARP:
      return Sdk.DOTNET;
    case ExampleLanguage.PYTHON:
      return Sdk.PYTHON;
    case ExampleLanguage.GO:
      return Sdk.GO;
    case ExampleLanguage.JAVA:
      return Sdk.JAVA;
    case ExampleLanguage.PHP:
      return Sdk.PHP;
    case ExampleLanguage.RUST:
      return Sdk.RUST;
    case ExampleLanguage.RUBY:
      return Sdk.RUBY;
    case ExampleLanguage.CLI:
      return Sdk.CLI;
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unrecognized language: ${language}`);
  }
}
