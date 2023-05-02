// import Tabs from '@theme/Tabs';
// import TabItem from '@theme/TabItem';
// import CodeBlock from '@theme/CodeBlock';
// import React from 'react';
// import {
//   ExampleLanguage,
//   ExampleSnippetType,
//   languageDisplayName
// } from '../../../plugins/example-code-snippets/dist/examples/examples';
// // import {
// //   SNIPPET_RESOLVER
// // } from "../../../plugins/example-code-snippets/dist/examples/resolvers/default-snippet-resolver";
//
//
// /**
//  * This component will render a tab view with example snippets for each language.
//  *
//  * If an example snippet is not found for a given language, the tab for that language will not be rendered.
//  *
//  * @param snippetId
//  * @returns {JSX.Element}
//  * @constructor
//  */
// export const SdkExampleSnippets = ({snippetId}) => {
//   // const snippetResolver = SNIPPET_RESOLVER;
//
//   return (
//     <Tabs>
//       {Object.values(ExampleLanguage).map(l => {
//         // const snippet = snippetResolver.resolveSnippet(l, ExampleSnippetType.CODE, snippetId);
//         const snippet = 'HABANERO'
//         if (snippet) {
//           return (<TabItem value={l} label={languageDisplayName(l)}>
//             <CodeBlock language={l}>{snippet}</CodeBlock>
//           </TabItem>)
//         }
//       })}
//     </Tabs>
//   );
// }

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';

export const SdkExampleSnippetTabs = ({js, python, java, go, csharp, rust, ruby, cli}) => {
  if (js || python || java || go || csharp || rust || ruby || cli) {
    return (
  <Tabs>
    {js &&
      <TabItem value="js" label="JavaScript">
        <CodeBlock language={'js'}>{js}</CodeBlock>
      </TabItem>}
    {python &&
      <TabItem value="python" label="Python">
        <CodeBlock language={'python'}>{python}</CodeBlock>
      </TabItem>}
    {java &&
      <TabItem value="java" label="Java">
        <CodeBlock language={'java'}>{java}</CodeBlock>
      </TabItem>}
    {go &&
      <TabItem value="go" label="Go">
        <CodeBlock language={'go'}>{go}</CodeBlock>
      </TabItem>}
    {csharp &&
      <TabItem value="csharp" label="C#">
        <CodeBlock language={'csharp'}>{csharp}</CodeBlock>
      </TabItem>}
    {rust &&
      <TabItem value="rust" label="Rust">
        <CodeBlock language={'rust'}>{rust}</CodeBlock>
      </TabItem>}
    {ruby &&
      <TabItem value="ruby" label="Ruby">
        <CodeBlock language={'ruby'}>{ruby}</CodeBlock>
      </TabItem>}
    {cli &&
      <TabItem value="cli" label="CLI">
        <CodeBlock language={'cli'}>{cli}</CodeBlock>
      </TabItem>}
  </Tabs>
    );
  } else {
    return null;
  }
}

