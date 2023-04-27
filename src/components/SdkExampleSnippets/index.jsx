import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import {SNIPPET_RESOLVER} from '../../../plugins/example-code-snippets/dist/examples/snippet-resolver';
import {
  ExampleLanguage,
  ExampleSnippetType,
  languageDisplayName
} from '../../../plugins/example-code-snippets/dist/examples/examples';


export const SdkExampleSnippets = ({snippetId}) => {
  const snippetResolver = SNIPPET_RESOLVER;

  return (
    <Tabs>
      {Object.values(ExampleLanguage).map(l => {
        const snippet = snippetResolver.resolveSnippet(l, ExampleSnippetType.CODE, snippetId);
        if (snippet) {
          return (<TabItem value={l} label={languageDisplayName(l)}>
            <CodeBlock language={l}>{snippet}</CodeBlock>
          </TabItem>)
        }
      })}
    </Tabs>
  );
}
