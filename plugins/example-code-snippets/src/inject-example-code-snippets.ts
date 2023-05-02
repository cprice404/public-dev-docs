import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {
  ExampleLanguage,
  exampleLanguage,
  exampleSnippetId,
  exampleSnippetType,
} from './examples/examples';
import {SNIPPET_RESOLVER} from './examples/resolvers/default-snippet-resolver';
import * as fs from 'fs';

function markdownNodeContainsExampleSnippets<T extends unist.Node>(
  node: unknown
): node is T {
  const unistNode = node as unist.Node;
  // console.log(`NODE TYPE: ${unistNode.type}`);
  // if (unistNode.type === 'jsx') {
  //   console.log(
  //     `\n\nFOUND A JSX NODE:\n\n${JSON.stringify(unistNode, null, 2)}\n\n`
  //   );
  // }
  // if (unistNode.type === 'text' || unistNode.type === 'code') {
  //   const literal = unistNode as unist.Literal;
  //   const value = literal.value as string;
  //   if (value.includes('%%%example:')) {
  //     return true;
  //   }
  // }
  if (unistNode.type === 'jsx') {
    const literal = unistNode as unist.Literal;
    const value = literal.value as string;
    if (value.startsWith('<SdkExampleSnippets')) {
      return true;
    }
  }
  return false;
}

/**
 * This is a docusaurus MDX/remark plugin.  It finds markers in the markdown
 * source, in 'text' or 'code' blocks, and injects example snippets into the
 * content in their place.
 *
 * The markers are delimited by 3 percent signs; here is an example:
 *
 * %%%example:typescript:code:API_Set%%%
 *
 * @param options
 * @returns {unknown}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function plugin(options: unknown): unknown {
  function transformer(tree: unist.Node) {
    visit(tree, markdownNodeContainsExampleSnippets, node => {
      console.log('USING FS IN THE INJECT PLUGIN');
      const hosts = fs.readFileSync('/etc/hosts').toString();
      const literal = node as unist.Literal;
      const value = literal.value as string;

      console.log(`Need to update JSX component: ${value}`);
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`REGEX MATCH: ${value.match(/snippetId={'([^']+)'}/m)}`);
      const snippetIdAttr = value.match(/snippetId={'([^']+)'}/m)?.[1];
      if (snippetIdAttr === undefined) {
        console.log(
          `Unable to find "snippetId={'xxx'}" attribute on jsx tag:\n${value}`
        );
        return;
      }
      const snippetId = exampleSnippetId(snippetIdAttr);
      const snippetForLanguage = (language: ExampleLanguage) =>
        (
          SNIPPET_RESOLVER.resolveSnippet(
            exampleLanguage(language),
            exampleSnippetType('code'),
            snippetId
          ) ?? ''
        ).replace(/[\\`$]/g, '\\$&');

      // const snippet = value.replace(
      //   /%%%([^%]*)%%%/g,
      //   (match: string, exampleId: string) => {
      //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
      //     const [_, language, snippetType, snippetId] = exampleId.split(':');
      //     return (
      //       SNIPPET_RESOLVER.resolveSnippet(
      //         exampleLanguage(language),
      //         exampleSnippetType(snippetType),
      //         snippetId
      //       ) ?? ''
      //     );
      //   }
      // );

      //       const theRuby = `
      // require 'momento'
      // MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken"
      // DEFAULT_TTL_SECONDS = 15
      // client = Momento::SimpleCacheClient.new(
      //   auth_token: MOMENTO_AUTH_TOKEN, default_ttl: DEFAULT_TTL_SECONDS
      // )
      // response = client.get('test-cache', 'test-key')
      // if response.hit?
      //   puts response.value_string
      // elsif response.miss?
      //   puts "The item was not in the cache."
      // elsif response.error?
      //   raise response.error
      // end`;

      //       const theJs = `
      // const authToken="eyJhbGc.MyTestToken";
      // const defaultTTL = 15;
      // const momento = new SimpleCacheClient(authToken, defaultTtl);
      // momento.set('test-cache', 'test-key', 'test-value');`;

      // js={\`${snippetForLanguage(ExampleLanguage.JAVASCRIPT)}\`}

      const sdkExamplesValue = `<SdkExampleSnippetTabs
  js={\`${snippetForLanguage(ExampleLanguage.JAVASCRIPT)}\`}
  python={\`${snippetForLanguage(ExampleLanguage.PYTHON)}\`}
  java={\`${snippetForLanguage(ExampleLanguage.JAVA)}\`}
  go={\`${snippetForLanguage(ExampleLanguage.GO)}\`}
  csharp={\`${snippetForLanguage(ExampleLanguage.CSHARP)}\`}
  rust={\`${snippetForLanguage(ExampleLanguage.RUST)}\`}
  ruby={\`${snippetForLanguage(ExampleLanguage.RUBY)}\`}
  cli={\`${snippetForLanguage(ExampleLanguage.CLI)}\`}
/>
`;

      //     const sdkExamplesValue = `<SdkExampleSnippetTabs
      // ruby={\`${theRuby.replace(/`/g, '\\`')}\`}
      // js={\`${snippet.replace(/[\\`$]/g, '\\$&')}\`}
      // />`;
      console.log(`SDK EXAMPLES VALUE:\n\n\n\n${sdkExamplesValue}\n\n\n\n`);

      node.type = 'paragraph';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      node.children = [
        {
          type: 'text',
          value: hosts,
        },
        // {
        //   type: 'jsx',
        //   value: `<SdkExamples\n  ruby="${hosts}"/>`,
        // },
        //         {
        //           type: 'jsx',
        //           value: `<SdkExamples
        //   ruby="${theRuby.replace(/"/g, '&quot;')}"
        //   js="${theJs.replace(/"/g, '&quot;')}"
        // />`,
        //         },
        {
          type: 'jsx',
          value: sdkExamplesValue,
        },
        // {
        //   type: 'Tabs',
        //   children: [
        //     {
        //       type: 'TabItem',
        //       data: {
        //         value: 'js',
        //         label: 'JavaScript',
        //       },
        //       children: [
        //         {
        //           type: 'CodeBlock',
        //           data: {
        //             language: 'js',
        //           },
        //           children: [
        //             {
        //               type: 'text',
        //               value: 'tabContents',
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
      ];
      // return false;
      /*
      <Tabs>
        <TabItem value="js" label="JavaScript">
            <CodeBlock language={'js'}>{js}</CodeBlock>
        </TabItem>
       */
    });
  }
  return transformer;
}

module.exports = plugin;
