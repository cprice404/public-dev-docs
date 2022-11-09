"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"html","value":"<span class=\'sidebar-title\'>Table of Contents</span>"},{"type":"link","label":"Momento Serverless Cache Service","href":"/docs/overview","className":"sidebar-item-overview","docId":"overview"},{"type":"link","label":"Getting Started","href":"/docs/getting-started","className":"sidebar-item-getting-started","docId":"getting-started"},{"type":"category","label":"How it works","collapsible":true,"collapsed":true,"className":"sidebar-item-how-it-works","items":[{"type":"link","label":"Critical Concepts","href":"/docs/how-it-works/momento-concepts","docId":"how-it-works/momento-concepts"},{"type":"link","label":"Caching with Serverless","href":"/docs/how-it-works/caching-with-serverless","docId":"how-it-works/caching-with-serverless"}],"href":"/docs/how-it-works"},{"type":"link","label":"Pricing","href":"/docs/pricing","className":"sidebar-item-pricing","docId":"pricing"},{"type":"link","label":"Service Limits","href":"/docs/limits","className":"sidebar-item-limits","docId":"limits"},{"type":"category","label":"Caching Concepts","collapsible":true,"collapsed":true,"className":"sidebar-item-caching-concepts","items":[{"type":"link","label":"Caching Strategies and Patterns","href":"/docs/caching-concepts/caching-strategies-and-patterns","docId":"caching-concepts/caching-strategies-and-patterns"}],"href":"/docs/category/caching-concepts"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"className":"sidebar-item-guides","items":[{"type":"link","label":"Caching with AWS Lambda","href":"/docs/guides/caching-with-aws-lambda","docId":"guides/caching-with-aws-lambda"}],"href":"/docs/guides"},{"type":"link","label":"API Reference","href":"/docs/API-reference","className":"sidebar-item-api-reference","docId":"API-reference"},{"type":"category","label":"Tutorial - Adding a cache to a serverless application","collapsible":true,"collapsed":true,"className":"sidebar-item-walkthrough","items":[{"type":"link","label":"Introduction and setup","href":"/docs/serverless-cache-walkthrough/adding-a-cache-to-serverless","docId":"serverless-cache-walkthrough/adding-a-cache-to-serverless"},{"type":"link","label":"Deploying a basic serverless application","href":"/docs/serverless-cache-walkthrough/deploying-a-basic-serverless-application","docId":"serverless-cache-walkthrough/deploying-a-basic-serverless-application"},{"type":"link","label":"Configuring Momento in Serverless","href":"/docs/serverless-cache-walkthrough/configuring-momento","docId":"serverless-cache-walkthrough/configuring-momento"},{"type":"link","label":"Read-aside caching with Momento","href":"/docs/serverless-cache-walkthrough/read-aside-caching-with-momento","docId":"serverless-cache-walkthrough/read-aside-caching-with-momento"},{"type":"link","label":"Write-aside caching with Momento","href":"/docs/serverless-cache-walkthrough/write-aside-caching-with-momento","docId":"serverless-cache-walkthrough/write-aside-caching-with-momento"}],"href":"/docs/serverless-cache-walkthrough"}]},"docs":{"API-reference":{"id":"API-reference","title":"API Reference","description":"Control APIs","sidebar":"tutorialSidebar"},"caching-concepts/caching-strategies-and-patterns":{"id":"caching-concepts/caching-strategies-and-patterns","title":"Caching Strategies and Patterns","description":"_Caching is fast_.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started with Momento Serverless Cache Service","description":"Jump in and get started on Momento Serverless Cache with your SDK of choice or CLI.","sidebar":"tutorialSidebar"},"guides/caching-with-aws-lambda":{"id":"guides/caching-with-aws-lambda","title":"Caching with AWS Lambda","description":"The release of AWS Lambda in November 2014 kicked off the serverless revolution in software architecture. Lambda\'s event-driven, function-based compute solution changed the nature of how we build applications in the cloud.","sidebar":"tutorialSidebar"},"how-it-works/caching-with-serverless":{"id":"how-it-works/caching-with-serverless","title":"Caching with Serverless","description":"Serverless is one of the hottest trends in software development, and we\'re seeing an explosion in \\"serverless-friendly\\" services.","sidebar":"tutorialSidebar"},"how-it-works/momento-concepts":{"id":"how-it-works/momento-concepts","title":"Critical Concepts","description":"On this page, you will learn about the concepts specific to using Momento in your application. These concepts apply across languages -- while Momento has supported SDKs for Golang, JavaScript, Python, Java, and .NET, the concepts described on this page are applicable to all of them.","sidebar":"tutorialSidebar"},"limits":{"id":"limits","title":"Service Limits for Momento Serverless Cache","description":"Explore Momento Serverless Cache\'s service limits, the default values, and how to get them changed if you need.","sidebar":"tutorialSidebar"},"overview":{"id":"overview","title":"Momento Serverless Cache Service","description":"Learn what you need to know to speed up your cloud application with the world\'s first serverless cache.","sidebar":"tutorialSidebar"},"pricing":{"id":"pricing","title":"Pricing","description":"Explore the simplicity of the pricing model for Momento Serverless Cache","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/adding-a-cache-to-serverless":{"id":"serverless-cache-walkthrough/adding-a-cache-to-serverless","title":"Introduction and setup","description":"In this tutorial, you will learn how to add a cache to your serverless application with AWS Lambda. To do so, you will use Momento Serverless Cache, a cache service built for\u200b\u200b deep integration with serverless applications. Momento Serverless Cache combines instant, elastic, cache storage with a pay-for-value pricing model, and blazing-fast performance.","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/configuring-momento":{"id":"serverless-cache-walkthrough/configuring-momento","title":"Configuring Momento in Serverless","description":"In the previous step, we deployed a basic serverless application using AWS Lambda, API Gateway, and DynamoDB. With this, we implemented the basics of account management within our application.","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/deploying-a-basic-serverless-application":{"id":"serverless-cache-walkthrough/deploying-a-basic-serverless-application","title":"Deploying a basic serverless application","description":"In this step, we will deploy a basic serverless application on AWS. This service will not use caching yet -- we are going to start with the straightforward implementation of our service first. In the following steps, we will see how to improve performance of our application by adding caching with Momento.","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/read-aside-caching-with-momento":{"id":"serverless-cache-walkthrough/read-aside-caching-with-momento","title":"Read-aside caching with Momento","description":"In the previous step, we installed and configured Momento within our serverless application. As part of that, we learned some important details about the Lambda lifecycle that will help with performance, particularly when making external network calls from our application.","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/write-aside-caching-with-momento":{"id":"serverless-cache-walkthrough/write-aside-caching-with-momento","title":"Write-aside caching with Momento","description":"In the previous step, we added our initial caching implementation by adding read-aside caching to our application. As part of that, we learned about different caching strategies and the factors to consider in choosing a cache strategy.","sidebar":"tutorialSidebar"}}}')}}]);