"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[29],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(a),p=o,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:5,sidebar_label:"Momento \u3067Write-aside \u30ad\u30e3\u30c3\u30b7\u30e5",title:"Momento \u3067Write-aside \u30ad\u30e3\u30c3\u30b7\u30e5"},i="Write-aside caching with Momento",s={unversionedId:"serverless-cache-walkthrough/write-aside-caching-with-momento",id:"serverless-cache-walkthrough/write-aside-caching-with-momento",title:"Momento \u3067Write-aside \u30ad\u30e3\u30c3\u30b7\u30e5",description:"In the previous step, we added our initial caching implementation by adding read-aside caching to our application. As part of that, we learned about different caching strategies and the factors to consider in choosing a cache strategy.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/serverless-cache-walkthrough/5-write-aside-caching-with-momento.md",sourceDirName:"serverless-cache-walkthrough",slug:"/serverless-cache-walkthrough/write-aside-caching-with-momento",permalink:"/ja/serverless-cache-walkthrough/write-aside-caching-with-momento",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/serverless-cache-walkthrough/5-write-aside-caching-with-momento.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Momento \u3067Write-aside \u30ad\u30e3\u30c3\u30b7\u30e5",title:"Momento \u3067Write-aside \u30ad\u30e3\u30c3\u30b7\u30e5"},sidebar:"tutorialSidebar",previous:{title:"Momento \u3067Read-aside \u30ad\u30e3\u30c3\u30b7\u30e5",permalink:"/ja/serverless-cache-walkthrough/read-aside-caching-with-momento"}},c={},l=[{value:"Key concepts on cache freshness",id:"key-concepts-on-cache-freshness",level:2},{value:"Implementing a write-aside caching strategy",id:"implementing-a-write-aside-caching-strategy",level:2},{value:"Summary",id:"summary",level:2}],h={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"write-aside-caching-with-momento"},"Write-aside caching with Momento"),(0,o.kt)("p",null,"In the previous step, we added our initial caching implementation by adding read-aside caching to our application. As part of that, we learned about different caching strategies and the factors to consider in choosing a cache strategy."),(0,o.kt)("p",null,"In this step, we'll evolve our caching strategy a bit. We'll add write-aside caching to our current read-aside implementation to ensure our cached data stays fresh. In doing so, we'll discuss some practical and conceptual tips for ensuring data freshness in your cache."),(0,o.kt)("p",null,"If you want to skip the concepts and go directly to the code, navigate ahead to the ",(0,o.kt)("a",{parentName:"p",href:"#implementing-a-write-aside-caching-strategy"},"implementation section"),"."),(0,o.kt)("h2",{id:"key-concepts-on-cache-freshness"},"Key concepts on cache freshness"),(0,o.kt)("p",null,'One of the most cited quotes in programming is "There are only two hard things in computer science -- cache invalidation and naming things."'),(0,o.kt)("p",null,"Naming things is outside of the scope of this tutorial (and seems to be truly unsolvable). However, the intricacies of cache invalidation are right on point and are worth discussing further."),(0,o.kt)("p",null,"What makes cache invalidation one of the hardest problems in computer science? There are two main factors at play here."),(0,o.kt)("p",null,"First, a cache is only a copy of some true data. The actual data is stored in some primary data store, likely one that has durability, transactionality, and other functionality that a cache doesn't support. The cache is optimized for fast reads and removes unnecessary features in support of this goal."),(0,o.kt)("p",null,"The problem here is that you now have two sources of data -- the primary and the cached -- and something is responsible for keeping them in sync. This requires a deep understanding of your application requirements and a tight integration between your read and write paths to ensure a satisfactory outcome to your end users."),(0,o.kt)("p",null,"The second problem is in the tradeoff between cache availability and cache hit rate. Caches use memory to store data for quick retrieval, and RAM is more expensive than disk. Rather than store your entire data set in your cache, you want to only store data that is likely to be accessed again in the near future."),(0,o.kt)("p",null,"This tradeoff is even more important in the world of static, instance-based caches. You need to pre-provision your cache size ahead of time, and you'll pay for that cache size being available regardless of whether you use it or not. Further, if your cache runs out of room, you'll need to rely on an eviction mechanism to eject entries from your cache. If you're not careful about cache management and eviction, this can make a problem go from bad to worse as you get a spike in evictions and increased load on your primary data sources."),(0,o.kt)("p",null,"With Momento, this problem is diminished. Momento is a dynamic cache that doesn't require pre-provisioning a specific cache size. You only need to specify the TTL value for a particular cache entry, and Momento will ensure it is available until the expiry."),(0,o.kt)("p",null,"This greatly reduces the number of factors you need to consider in caching. You don't need to monitor overall memory usage and balance an unused, over-provisioned cache during downtimes against your peak usage. Rather, you only need to balance your cache hit rate against your overall spend. This makes it much easier to tune your TTL in a way that makes sense to you and your users."),(0,o.kt)("p",null,"Now that we know about cache freshness and the difficulties of cache invalidation, let's go ahead and update our application code to use a write-aside strategy as well."),(0,o.kt)("h2",{id:"implementing-a-write-aside-caching-strategy"},"Implementing a write-aside caching strategy"),(0,o.kt)("p",null,"Let's go back and implement write-aside caching in our serverless application. To do this, we will proactively store an entry in our cache whenever we write the underlying data. This pattern will be in addition to our existing read-aside strategy, and we'll update our read-aside implementation in light of these changes."),(0,o.kt)("p",null,"In implementing caching, it's good to do an audit of all the different places your data can change to ensure you're not caching stale data. This is particularly true when you have multiple places manipulating and displaying the same piece of data. You should also be careful when caching data that is out of your control, such as that which belongs to another service."),(0,o.kt)("p",null,"The caching requirements are pretty straightforward in our application. We are only caching data that belongs to our service. Additionally, there are only a few paths to update the data, and they all flow through the AccountService class that we created."),(0,o.kt)("p",null,"Let's start by adding write-aside caching for our User object."),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/accounts/service.js")," file and find the ",(0,o.kt)("inlineCode",{parentName:"p"},"createUser")," method on your AccountService class definition. Update it so it looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'async createUser({ username, firstName, lastName }) {\n  const user = new User({ username, firstName, lastName });\n  try {\n    await this._dynamoDBClient\n      .putItem({\n        TableName: TABLE_NAME,\n        Item: user.toItem(),\n        ConditionExpression: "attribute_not_exists(PK)",\n      })\n      .promise();\n\n    await this._cacheClient.set(\n      CACHE_NAME,\n      getUserCacheKey(user),\n      JSON.stringify(user.toItem()),\n      1800\n    );\n\n    return user;\n  } catch (error) {\n    if (error.code === "ConditionalCheckFailedException") {\n      throw new UserAlreadyExistsError(username);\n    }\n    throw error;\n  }\n}\n')),(0,o.kt)("p",null,"Notice that the only change we're making to our existing function is caching our User item after it was successfully stored in DynamoDB. Other than that, the code runs exactly as before."),(0,o.kt)("p",null,"There are two other notes we should discuss as we update our code."),(0,o.kt)("p",null,"First, notice that we're using a ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserCacheKey")," function to generate the cache key when storing our User item. This is because we're now using this cache key in two places -- once in the ",(0,o.kt)("inlineCode",{parentName:"p"},"createUser")," method and once in the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUser")," method. We want to ensure these two methods are using the same value, so we'll centralize that in a function that both methods can call."),(0,o.kt)("p",null,"Add the following ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserCacheKey")," function to the bottom of your ",(0,o.kt)("inlineCode",{parentName:"p"},"src/accounts/service.js")," file so it can be used by both methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const getUserCacheKey = (user) => {\n  return `USER#${user.username}`;\n};\n")),(0,o.kt)("p",null,"The second thing to notice about our update is that we're using a much longer TTL value when storing our User item. Rather than storing our item for 60 seconds, we're storing it for 1800 seconds (30 minutes)."),(0,o.kt)("p",null,"Because we are now using write-aside caching as well, we can be more aggressive in caching our data for longer periods of time. We don't have to worry about our cached data becoming stale as we will update the cached item whenever it changes."),(0,o.kt)("p",null,"And because Momento is a dynamic, elastic cache that does not require pre-provisioning a set amount of memory, we don't need to think about managing our cache size to prevent eviction by algorithm. The only thing we need to focus on is how long we should keep our data around. This makes it easier to balance fewer concerns -- our cache hit rate vs. our bill -- rather than a larger variety of considerations."),(0,o.kt)("p",null,"Let's make corresponding changes to our getUser method above. Update the getUser method so it looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"async getUser({ username }) {\n  const user = new User({ username });\n\n  let getResp = await this.cacheClient.get(CACHE_NAME, getUserCacheKey(user));\n  if (getResp.status === CacheGetStatus.Hit) {\n    const cacheContent = JSON.parse(getResp.text());\n    return cacheContent ? itemToUser(cacheContent) : null;\n  }\n\n  const response = await this._dynamoDBClient\n    .getItem({\n      TableName: TABLE_NAME,\n      Key: user.keys(),\n    })\n    .promise();\n\n  await this._cacheClient.set(\n    process.env.CACHE_NAME,\n    userCacheKey,\n    JSON.stringify(response.Item),\n    1800\n  );\n\n  return response.Item ? itemToUser(response.Item) : null;\n}\n")),(0,o.kt)("p",null,"The changes here are pretty minimal. First, we removed the template literal to generate the user cache key and instead used the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserCacheKey")," function that is used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"createUser")," method. Then, we changed the TTL from 60 to 1800 when storing a User item in the cache."),(0,o.kt)("p",null,"Notice how well the combination of a write-aside and read-aside cache work together. By using a read-aside strategy, we can improve the latency of frequently accessed items. By adding a write-aside strategy, we can cache these items for longer without worrying about data consistency issues. And by using Momento for our implementation, we don't need to worry about running out of room in our cache."),(0,o.kt)("p",null,"You can make similar changes to the other methods in the AccountService to implement write-aside caching. As noted above, having stale Membership data could be particularly disruptive to our application users. They might not be able to access something they should have access to or, even worse, might be allowed to access something they shouldn't have access to. By adding write-aside caching, we can prevent these undesirable scenarios."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"That concludes this tutorial on adding a cache to your serverless application. You can remove your application by running the following command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"serverless remove\n")),(0,o.kt)("p",null,"In this tutorial, we learned some practical steps for integrating Momento into your application as well as some conceptual material about caching strategies, the Lambda execution model, and implementation considerations."),(0,o.kt)("p",null,"If you are looking for practical tips on using Momento with AWS Lambda, be sure to look at our reference guide for ",(0,o.kt)("a",{parentName:"p",href:"../guides/caching-with-aws-lambda"},"adding caching to AWS Lambda functions"),"."),(0,o.kt)("p",null,"If you want a broader overview of concepts discussed in this tutorial, check out our pages on ",(0,o.kt)("a",{parentName:"p",href:"../how-it-works/momento-concepts"},"Momento concepts")," and ",(0,o.kt)("a",{parentName:"p",href:"../caching-concepts/caching-strategies-and-patterns"},"caching strategies"),"."),(0,o.kt)("p",null,"If you're looking to get started with Momento, check out our ",(0,o.kt)("a",{parentName:"p",href:"/ja/getting-started"},"quickstart tutorial")," to get your credentials and cache your first item in less than 5 minutes."))}u.isMDXComponent=!0}}]);