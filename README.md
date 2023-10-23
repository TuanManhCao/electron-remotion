# electron-remotion

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```
---

Steps to run
1. yarn create @quick-start/electron
2. Choose React, Typescript, Electron Updater (YES), Download Mirror proxy (YES)
3. run `yarn`


Add remotion to project,
1. run this command  `yarn add @remotion/cli remotion`
2. Copy over files from remotion examples which are all files in `/src/remotion` folder
3. Change configre in 2 files `tsconfig.node.json` and `tsconfig.web.json` to make it work with typescript
4. Run `npx remotion studio src/remotion/index.ts` to make sure that included example works. And it does.
