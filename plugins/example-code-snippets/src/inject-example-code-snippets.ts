import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {exampleLanguage, exampleSnippetType} from './examples/examples';
import {SNIPPET_RESOLVER} from './examples/resolvers/default-snippet-resolver';
import * as fs from 'fs';

function markdownNodeContainsExampleSnippets<T extends unist.Node>(
  node: unknown
): node is T {
  const unistNode = node as unist.Node;
  console.log(`NODE TYPE: ${unistNode.type}`);
  if (unistNode.type === 'jsx') {
    console.log(
      `\n\nFOUND A JSX NODE:\n\n${JSON.stringify(unistNode, null, 2)}\n\n`
    );
  }
  if (unistNode.type === 'text' || unistNode.type === 'code') {
    const literal = unistNode as unist.Literal;
    const value = literal.value as string;
    if (value.includes('%%%example:')) {
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

      literal.value = value.replace(
        /%%%([^%]*)%%%/g,
        (match: string, exampleId: string) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_, language, snippetType, snippetId] = exampleId.split(':');
          const snippet =
            SNIPPET_RESOLVER.resolveSnippet(
              exampleLanguage(language),
              exampleSnippetType(snippetType),
              snippetId
            ) ?? '';
          return `       
<SdkExamples
  js=${snippet}
  />
          `;
        }
      );
      node.type = 'paragraph';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      node.children = [
        {
          type: 'text',
          value: hosts,
        },
        {
          type: 'jsx',
          value: '<SdkExamples\n  ruby="RUBYRUBYRUBY"/>',
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
