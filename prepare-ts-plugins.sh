#!/usr/bin/env bash

set -e
set -x

pushd plugins/example-code-snippets
   npm ci
   npm run build
   npm run prepare-git-repos
popd
