---
sidebar_position: 3
sidebar_label: Getting Started
sidebar_class_name: sidebar-item-getting-started
title: Getting Started
pagination_prev: null
pagination_next: null
description: Jump in and get started quickly using Momento Cache with your SDK of choice or CLI.
---

# Getting Started with Momento Cache
If you're looking to jump in and get started with Momento Cache with an SDK or CLI, you've come to the right place. Want to quickly get a feel for the Momento experience without installing any software? You can do so right here [in your browser](#try-our-cli-and-an-sdk-in-your-browser). Or, if you're ready to setup your development environment and get to building your own applications with Momento you can follow the [simple instructions below](#install-the-momento-command-line-interface-cli).

## Try our CLI and an SDK in your browser

You can try out Momento Cache today, right in your browser. No software installation required!
:::note
Momento Cache is an API based serverless service. It does not deploy anything into your (AWS, GCP, Azure, etc.) account.
:::

<br />

First, request your free auth token, create a cache, configure your CLI, and start running `set` and `get` commands on your cache. Launch below.

<a href="https://play.instruqt.com/embed/momento/tracks/sandbox-container-1challenge?token=em_54kTDywfWaG95-rC&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser" target="_top"><img src="/img/cli_lab.png" alt="CLI lab" /></a>

<br />
<br />

Then, use the auth token and cache you just created to run a JavaScript application using our Node.js SDK. Launch below.

<a href="https://play.instruqt.com/embed/momento/tracks/momento-nodejs-demo?token=em_f8PM8Aob-mHIfOTT&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser" target="_top"><img src="/img/sdk_lab.png" alt="SDK lab" /></a>

<br />
<br />

## Install the Momento command line interface (CLI)

If you want to run the CLI on your own machine instead of [running it in your browser](#try-our-cli-and-an-sdk-in-your-browser),
here's how to get started on different operating systems:

**macOS using [Homebrew package manager](https://brew.sh/)**

```
brew tap momentohq/tap
brew install momento-cli
```

**Linux**

Visit the web page for the latest [GitHub release](https://github.com/momentohq/momento-cli/releases).
There, you will find `.deb` and `.rpm` files for both x86_64 and aarch64.

`.deb` files have been tested on modern versions of Ubuntu and Debian.
`.rpm` files have been tested on modern versions of RHEL, Amazon Linux 2, Rocky Linux, and CentOS.

If you have problems with any of these packages on your favorite platform, please [file an issue](https://github.com/momentohq/momento-cli/issues) and let us know!

We also provide tarballs for both x86_64 and aarch64; these contain the `momento` binary,
which you may add anywhere you like in your execution path.

**Windows**

Our CLI is available in the Windows Package Manager (`winget`). To install, run the following from PowerShell or the Command Prompt:

```powershell
winget install momento.cli
```

Alternatively visit the web page for the latest [github release](https://github.com/momentohq/momento-cli/releases).
There you will find an `.msi` installer for Windows platforms, as well as a windows `.zip` file if
you prefer to manually copy the `momento` executable to your preferred location.

If you have problems with the Windows packages please [file an issue](https://github.com/momentohq/momento-cli/issues) and let us know!


To verify the CLI was installed correctly, you can run our help command:

```
$ momento -h  
CLI for Momento APIs

Usage: momento [OPTIONS] <COMMAND>

Commands:
  cache        Interact with caches
  configure    Configure credentials
  account      Manage accounts
  signing-key  Manage signing keys
  help         Print this message or the help of the given subcommand(s)

Options:
      --verbose            Log more information
  -p, --profile <PROFILE>  User profile [default: default]
  -h, --help               Print help
  -V, --version            Print version
```

### Obtain an auth token

[Authentication in Momento is done via an authentication token](./learn/how-it-works#authentication-token), and you can sign up for a Momento Cache auth token directly from the command line interface installed in the previous section.

Authentication tokens are associated with a specific Momento Cache cloud provider and specific region. You can provision an auth token **for each region** using the `account` command with your desired cloud provider and Region:

#### AWS [available regions are us-west-2, us-east-1, ap-northeast-1, ap-south-1, eu-west-1]

```console
momento account signup aws --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>
```

#### GCP [available regions are us-east4, us-central1, asia-northeast1]

```console
momento account signup gcp --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>
```

#### Azure (Coming Soon) [reach out](mailto:support@momentohq.com) if interested

```console
momento account signup azure --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>
```

Be sure to replace `<TYPE_YOUR_EMAIL_HERE>` and `<TYPE_DESIRED_REGION>` with actual values.

*Note: If a region you wish to use is not available for your selected cloud provider, please [reach out](mailto:support@momentohq.com) to us to inquire about adding it.*

## Configure the Momento CLI for read and write operations

Momento will email your auth token to you. You can configure your local CLI to use this token by running the `momento configure` command:

```
$ momento configure
Token: < Enter token from email here >
Default Cache [default-cache]: < Name of cache to use on CLI by default >
Default TTL Seconds [600]: 30 // Sets the default TTL for cache entries. For demonstration purposes we are setting this lower right now.
[2022-03-31T15:31:25Z INFO  momento::commands::cache::cache_cli] creating cache...
[2022-03-31T15:31:33Z INFO  momento::commands::configure::configure_cli] default cache successfully created
```

You are now up and running with Momento Cache! Let's see how to use the Momento CLI to cache data in Momento Cache.

## Cache some data

The `cache` command in the Momento CLI is used to interact with your Momento cache. Let's see a few of these commands in action.

First, you can use the `set` subcommand to store an item in your default Momento Cache:

```
$ momento cache set --key test --value value
[2022-03-31T15:45:17Z INFO  momento::commands::cache::cache_cli] setting key: test into cache: my-first-cache
[2022-03-31T15:45:18Z INFO  momento::commands::cache::cache_cli] set success
```

Then, you can retrieve the key using the `get` subcommand:

```
$ momento cache get --key test
[2022-03-31T15:45:25Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache
value
```

In configuring the cache, we set a default Time to Live (TTL) of 30 seconds. If you wait 30 seconds and try to retrieve the cache again, you will see the item has disappeared:

```
$ sleep 30 // wait for item to expire
$ momento cache get --key test
[2022-03-31T15:46:02Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache
[2022-03-31T15:46:03Z INFO  momento::commands::cache::cache_cli] cache miss
```

These are the standard `get` and `set` [data plane operations](./learn/how-it-works#data-plane-performant-cache-interactions) with the Momento CLI.

You can also manage [control plane operations](./learn/how-it-works#control-plane-simple-efficient-cache-management) with the Momento CLI, such as creating a cache, deleting a cache, or listing available caches.

You can see all of the available subcommands in the `cache` command by using the `momento cache -h` flag in your terminal:

```
$ momento cache -h
Interact with caches

Usage: momento cache [OPTIONS] <COMMAND>

Commands:
  create  Create a cache
  delete  Delete a cache
  list    List all caches
  set     Store an item in a cache
  get     Get an item from the cache
  help    Print this message or the help of the given subcommand(s)

Options:
  -e, --endpoint <ENDPOINT>  An explicit hostname to use; for example, cell-us-east-1-1.prod.a.momentohq.com
      --verbose              Log more information
  -p, --profile <PROFILE>    User profile [default: default]
  -h, --help                 Print help
```

Further, you can specify non-default configuration options for your commands, such as a different region, cache name, or TTL.

For more information about any of the parameters for a subcommand, you can use `momento cache $SUBCOMMAND --help` to learn more.

## Next steps

The CLI is great for testing and for understanding the core Momento Cache API, but most of your caching work will be done in your application. For those, you can use the Momento SDKs.

We currently have the following SDK's languages available. Check out each repo for detailed instructions and usage examples.

- [Go](https://github.com/momentohq/client-sdk-go)
- [Java](https://github.com/momentohq/client-sdk-java)
- [JavaScript](https://github.com/momentohq/client-sdk-javascript)
- [Python](https://github.com/momentohq/client-sdk-python)
- [.NET](https://github.com/momentohq/client-sdk-dotnet)
- [Rust](https://github.com/momentohq/client-sdk-rust)
- [PHP](https://github.com/momentohq/client-sdk-php)
- [Ruby](https://github.com/momentohq/client-sdk-ruby)

## FAQ
<details>
  <summary>Does Momento deploy any resources into my cloud account?</summary>
No it does not. Momento Cache is an API-based serverless service that you call from within your application code.
</details>
