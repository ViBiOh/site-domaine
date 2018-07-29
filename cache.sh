#!/usr/bin/env bash

set -e
set -u

function sed_inplace() {
  if [ `uname -s` == "Darwin" ]; then
    sed -i '' "$@"
  else
    sed -i "$@"
  fi
}

for file in `find dist -name "*.html"`; do
  sed_inplace "s|{{version}}|`git log --pretty=format:'%h' -n 1`|g" "${file}"
done
