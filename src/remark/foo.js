const visit = require('unist-util-visit');

const temporaryHardCodedCodeSnippets = new Map([
  ['example:typescript:code:ListCaches', 'This snippet would be pulled from the node.js repo and contain sample code for listing caches in TS'],
  ['example:go:description:Logging', 'This snippet would be pulled from the go repo, and contain prose about logging support in our Golang SDK'],
  ['example:go:code:Logging', 'This snippet would be pulled from the go repo, and contain example code illustrating logging support.'],
]);

/*

%%%example:typescript:code:ListCaches%%%
```

%%%example:go:description:Logging%%% %%%example:go:code:Logging%%%
 */


function test(node, index, parent) {
  // console.log(`Checking node: ${node['type']}`);
  // console.log(`Checking node: ${JSON.stringify(node)}`);
  if (
    node.type === 'textDirective' ||
    node.type === 'leafDirective' ||
    node.type === 'containerDirective'
  ) {
    console.log(`FOUND A DIRECTIVE NODE: ${node.type}`);
  }

  if (node.type === 'text') {
    if (node.value.includes("%%%")) {
     console.log(`TEXT NODE VALUE: ${node.value}`)
     return true;
    }
  }

  if (node.type === 'code') {
    if (node.value.includes("%%%")) {
      console.log(`CODE NODE VALUE: ${node.value}`)
      return true
    }
  }

  return false;
}

const plugin = (options) => {
  console.log('\n\nIN FOO PLUGIN FN\n\n');
  const transformer = async (ast) => {
    // console.log('\n\nIN FOO TRANSFORMER FN\n\n');
    let number = 1;
    // visit(ast, 'heading', (node) => {
    visit(ast, test, (node) => {
      console.log(`

IN FOO VISIT FN, SHOULD BE DOING SOMETHING WITH NODE: ${node.value}

`);

      node.value = node.value.replace(/%%%([^%]*)%%%/g, (match, exampleId) => {
        return temporaryHardCodedCodeSnippets.get(exampleId)
      })
      // if (node.depth === 2 && node.children.length > 0) {
      //   node.children.unshift({
      //     type: 'text',
      //     value: `FOOOO Section ${number}. `,
      //   });
      //   number++;
      // }
    });
  };
  return transformer;
};

module.exports = plugin;
