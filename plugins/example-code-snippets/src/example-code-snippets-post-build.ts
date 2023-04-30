import {MISSING_SNIPPETS_REGISTRY} from './examples/missing-snippets-registry';
import * as fs from 'fs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function (context, options) {
  return {
    name: 'example-code-snippets-post-build',

    // loadContent()
    // eslint-disable-next-line require-await,@typescript-eslint/require-await
    async loadContent() {
      // return 1 + Math.floor(Math.random() * 10);
      console.log('\n\n\n\n\n\n\n\nLOADING CONTENT!!!\n\n\n\n\n');
      const hosts = fs.readFileSync('/etc/hosts').toString();
      console.log(hosts);
      return hosts;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    async contentLoaded({content, actions}) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-unsafe-assignment
      const {createData} = actions;
      // Create friends.json
      // const friends = ['Yangshun', 'Sebastien'];
      // const friendsJsonPath = await createData(
      //   'friends.json',
      //   JSON.stringify(friends),
      // );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      const tacoJson = await createData(
        'taco.json',
        JSON.stringify({taco: 'TACO', burrito: 'BURRITO'})
      );
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`TACO JSON: ${tacoJson}`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      const tacoText = await createData('taco.txt', 'foo\nbar\nbaz\nbam');
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`TACO TEXT: ${tacoText}`);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postBuild({siteConfig = {}, routesPaths = [], outDir}) {
      console.log('SNIPPETS PLUGINS POST-BUILD');
      console.log(
        `MISSING SNIPPETS: ${MISSING_SNIPPETS_REGISTRY.missingSnippets()
          .map(s => JSON.stringify(s, null, 2))
          .join('\n')}`
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    configureWebpack(config: unknown, isServer: unknown, utils: unknown) {
      return {
        node: {
          __dirname: true,
        },
        resolve: {
          alias: {
            path: require.resolve('path-browserify'),
          },
          fallback: {
            fs: false,
            // fs: require.resolve('fs'),
          },
        },
      };
    },
  };
};
