# site-domaine

[![Build Status](https://travis-ci.org/ViBiOh/site-domaine.svg?branch=master)](https://travis-ci.org/ViBiOh/site-domaine) [![](https://badge.imagelayers.io/vibioh/site-domaine:latest.svg)](https://imagelayers.io/?images=vibioh/site-domaine:latest 'Get your own badge on imagelayers.io')

[Personal website](https://domaine-de-montdenis.fr)

## Travis Deploy configuration

```bash
ssh-keygen -t rsa -b 4096 -C '${REPO_NAME}@travis-ci.org' -f ./deploy_rsa
travis login --github-token ${GITHUB_TOKEN}
travis encrypt-file deploy_rsa --add
ssh-copy-id -i deploy_rsa.pub ${SSH_USER}@${SSH_HOST}
rm -f deploy_rsa deploy_rsa.pub
git add deploy_rsa.enc .travis.yml
```
