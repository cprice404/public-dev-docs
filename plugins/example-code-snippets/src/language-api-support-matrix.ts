import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {ApiSupportMatrixGenerator} from './api-support/api-support-matrix-generator';

function isSupportMatrixNode<T extends unist.Node>(node: unknown): node is T {
  // return false;
  const unistNode = node as unist.Node;
  // console.log(`NODE: ${unistNode.type}`);
  // console.log(`NODE: ${JSON.stringify(unistNode, null, 2)}`);
  if (unistNode.type === 'paragraph') {
    const unistParent = unistNode as unist.Parent;
    if (unistParent.children.length === 1) {
      const childLiteral: unist.Literal = unistParent
        .children[0] as unist.Literal;
      if (childLiteral.type === 'text') {
        const value = childLiteral.value as string;
        if (value.match('%%%API_SUPPORT_MATRIX%%%')) {
          return true;
        }
      }
    }
  }
  return false;
}

/**
 * This is a docusaurus MDX/remark plugin.  It finds the %%%API_SUPPORT_MATRIX%%% marker
 * in the markdown and injects the API support matrix tables in its place.
 *
 * @param options
 * @returns {unknown}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function plugin(options: unknown): unknown {
  function transformer(tree: unist.Parent) {
    visit(tree, isSupportMatrixNode, node => {
      console.log(`THE TREE IS: ${JSON.stringify(tree, null, 2)}`);
      console.log(`THE NODE IS: ${JSON.stringify(tree, null, 2)}`);
      // // const literal = node as unist.Literal;
      // // literal.value = 'blahlahlhlahlahlaha';
      //
      const matrixGenerator = new ApiSupportMatrixGenerator();
      const newNodes = matrixGenerator.generateApiMatrixMarkdownNodes();

      // // literal.value = matrixGenerator.generateApiMatrixMarkdown();
      // const tableChildren = [
      //   {
      //     type: 'tableRow',
      //     children: [
      //       {
      //         type: 'tableCell',
      //         children: [
      //           {
      //             type: 'text',
      //             value: 'Feature',
      //           },
      //         ],
      //       },
      //       {
      //         type: 'tableCell',
      //         children: [
      //           {
      //             type: 'text',
      //             value: 'Node.js',
      //           },
      //         ],
      //       },
      //       {
      //         type: 'tableCell',
      //         children: [
      //           {
      //             type: 'text',
      //             value: 'Python',
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     type: 'tableRow',
      //     children: [
      //       {
      //         type: 'tableCell',
      //         children: [
      //           {
      //             type: 'text',
      //             value: 'FOO',
      //           },
      //         ],
      //       },
      //       {
      //         type: 'tableCell',
      //         children: [
      //           {
      //             type: 'text',
      //             value: 'BAR',
      //           },
      //         ],
      //       },
      //       {
      //         type: 'tableCell',
      //         children: [
      //           {
      //             type: 'text',
      //             value: 'BOOOOOM',
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     type: 'tableRow',
      //     children: [
      //       {
      //         type: 'tableCell',
      //         children: [
      //           {
      //             type: 'text',
      //             value: 'FOO',
      //           },
      //         ],
      //       },
      //       {
      //         type: 'tableCell',
      //         children: [
      //           {
      //             type: 'text',
      //             value: 'BAR',
      //           },
      //         ],
      //       },
      //       {
      //         type: 'tableCell',
      //         children: [
      //           {
      //             type: 'text',
      //             value: 'BOOOOOM',
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ];
      // node.type = 'table';
      // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // // @ts-ignore
      // node.value = 'TACO';
      // // delete node.value;
      // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // // @ts-ignore
      // node.children = tableChildren;
      // // node.children = [];

      // const newChildren = [
      //   {
      //     type: 'paragraph',
      //     children: [
      //       {
      //         type: 'text',
      //         value: 'SOMETHING SOMETHING',
      //       },
      //     ],
      //   },
      //   {
      //     type: 'paragraph',
      //     children: [
      //       {
      //         type: 'text',
      //         value: 'SOMETHING ELSE',
      //       },
      //     ],
      //   },
      // ];

      const treeChildren: Array<unist.Node> = tree.children;
      const thisNodeIndex = treeChildren.findIndex(n => n === node);
      console.log(`THIS NODE INDEX: ${thisNodeIndex}`);
      tree.children = [
        ...treeChildren.slice(0, thisNodeIndex),
        ...newNodes,
        ...treeChildren.slice(thisNodeIndex + 1),
      ];

      //
      // node.type = 'paragraph';
      // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // // @ts-ignore
      // node.value = '';
      // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // // @ts-ignore
      // node.children = ;
    });
  }
  return transformer;
}

module.exports = plugin;
