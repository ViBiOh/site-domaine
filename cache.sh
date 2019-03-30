#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

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

main "${@}"
