# README Task Ninja

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Table of Contents

- [Installation](#installation)
- [Running](#running)
- [Building](#building)
- [Committing](#committing)
- [Demo](#demo)
- [Support](#support)

## Installation

Download to your project directory and install:

```sh
npm install
npm install --global nx@latest
```

## Running

If you have Nx CLI installed:

```sh
nx serve mobile
```

Otherwise: 

```sh
npx nx serve mobile
```

## Building

If you have Nx CLI installed:

```sh
nx build mobile
```

Otherwise: 

```sh
npx nx build mobile
```

## Committing

This project uses commitizen:

```sh
git commit -m ''
git commit
npm run cm
```

Any of the above commands will trigger the commit wizard and guide you to use our commit rules.

## Demo

The project uses Github Actions to automagically deploy to Firebase, when code gets merged into `main` or PRs are created.

You can see the running application, [here](https://task-ninja-42158.web.app/).

## Support

Please [open an issue](https://github.com/fraction/readme-boilerplate/issues/new) for support.
