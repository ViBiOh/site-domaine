#!/usr/bin/env bash

set -o nounset -o pipefail -o errexit

function sed_inplace() {
  if [[ $(uname -s) == "Darwin" ]]; then
    sed -i '' "$@"
  else
    sed -i "$@"
  fi
}

main() {
  for file in $(find dist -name "*.html"); do
    sed_inplace "s|{{version}}|$(git rev-parse --short HEAD)|g" "${file}"
  done
}

main "${@:-}"
