# Hitchhiker's Guide to d00bai

This website is built using [Docusaurus](https://docusaurus.io/) and is completely open sourced and indexed.

This is a living document for the d00bai.com fam that contains information, tips and random nuances that you may find helpful in your move and stay in the UAE. This is a volunteer and crowdsourced effort and if you find that something is missing, post on one of the channels or make an addition.

This guide is fully open source and is built with love by the d00bai community.

We hope it is helpful! Cheers

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
