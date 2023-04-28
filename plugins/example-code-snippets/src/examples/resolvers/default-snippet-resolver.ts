import {
  ExampleLanguage,
  ExampleSnippetId,
  ExampleSnippetType,
} from '../examples';
import {MISSING_SNIPPETS_REGISTRY} from '../missing-snippets-registry';
import {SnippetResolver} from '../snippet-resolver';
import {SdkRepoSnippetResolver} from './sdk-repo-snippet-resolver';
import {FallbackLegacySnippetResolver} from './fallback-legacy-snippet-resolver';

export class DefaultSnippetResolver implements SnippetResolver {
  private readonly sdkRepoResolver = new SdkRepoSnippetResolver();
  private readonly fallbackLegacyResolver = new FallbackLegacySnippetResolver();

  resolveSnippet(
    language: ExampleLanguage,
    snippetType: ExampleSnippetType,
    snippetId: ExampleSnippetId
  ): string | undefined {
    const fromSdkRepo = this.sdkRepoResolver.resolveSnippet(
      language,
      snippetType,
      snippetId
    );
    if (fromSdkRepo !== undefined) {
      return fromSdkRepo;
    }

    MISSING_SNIPPETS_REGISTRY.registerMissingSnippet({
      language,
      snippetType,
      snippetId,
    });

    return this.fallbackLegacyResolver.resolveSnippet(
      language,
      snippetType,
      snippetId
    );
  }
}

export const SNIPPET_RESOLVER: SnippetResolver = new DefaultSnippetResolver();
