# http-me: status code lookup



[![npm package](https://img.shields.io/badge/npm%20i-example--typescript--package-brightgreen)](https://www.npmjs.com/package/http-me) [![version number](https://img.shields.io/npm/v/http-me?color=green&label=version)](https://github.com/thathurtabit/http-me/releases) [![Actions Status](https://github.com/thathurtabit/http-me/workflows/Test/badge.svg)](https://github.com/thathurtabit/http-me/actions) [![License](https://img.shields.io/github/license/thathurtabit/http-me)](https://github.com/thathurtabit/http-me/blob/main/LICENSE)

If you're anything like me, you'll forget all but a handful of HTTP Status Codes, so why not install and then run a quick lookup from your terminal?

## Install

```bash
npm i -g http-me
```

## Usage example
In your terminal, enter `http-me` and then a status code number, ie:
```base
$ http-me 400

400: Bad Request

The HyperText Transfer Protocol (HTTP) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
```



## Development


### Install dependencies

Install dependencies with npm:

```bash
npm i
```


### Test

Test your code with Jest framework:

```bash
npm run test
```

**Note:** Example TypeScript Package uses [husky](https://typicode.github.io/husky/), [pinst](https://github.com/typicode/pinst) and [commitlint](https://commitlint.js.org/) to automatically execute test and [lint commit message](https://www.conventionalcommits.org/) before every commit.

### Build

Build production (distribution) files in your **dist** folder:

```bash
npm run build
```

It generates CommonJS (in **dist/cjs** folder), ES Modules (in **dist/esm** folder), bundled and minified UMD (in **dist/umd** folder), as well as TypeScript declaration files (in **dist/types** folder).

### Try it before publishing

Run:

```bash
npm link
```

[npm link](https://docs.npmjs.com/cli/v6/commands/npm-link) will create a symlink in the global folder, which may be **{prefix}/lib/node_modules/http-me** or **C:\Users\<username>\AppData\Roaming\npm\node_modules\http-me**.

Create an empty folder elsewhere, you don't even need to `npm init` (to generate **package.json**). Open the folder with VS Code, open a terminal and just run:

```bash
npm link http-me
```

This will create a symbolic link from globally-installed http-me to **node_modules/** of the current folder.

You can then run, for example, the following command from your `terminal`:

```bash
http-me 200
```

If you don't see any linting errors in VS Code, if you put your mouse cursor over `Num` and see its type, then it's all good.

Whenever you want to uninstall the globally-installed http-me and remove the symlink in the global folder, run:

```bash
npm uninstall http-me -g
```

### Prepare to publish

Create an [npm](https://www.npmjs.com/) account.

<details><summary><strong>Click to read this section if you do manual publishing</strong></summary>

#### Manual publishing to npm

Log in:

```bash
npm adduser
```

And publish:

```bash
npm publish
```

</details>

This package is configured to use GitHub Actions CI/CD to automate both the **npm** and **GitHub Packages** publishing process. The following are what you have to do.

#### CI publishing to npm

Follow [npm's official instruction](https://docs.npmjs.com/creating-and-viewing-access-tokens) to create an npm token. Choose "Publish" from the website, or use `npm token create` without argument with the CLI.

If you use 2FA, then make sure it's enabled for **authorization** only instead of **authorization and publishing** (**Edit Profile** -> **Modify 2FA**).

On the page of your newly created or existing GitHub repo, click **Settings** -> **Secrets** -> **New repository secret**, the **Name** should be `NPM_TOKEN` and the **Value** should be your npm token.

#### CI publishing to GitHub Packages

If you publish your package to npm only, and don't want to publish to GitHub Packages, then delete the lines from `- name: Setup .npmrc file to publish to GitHub Packages` to the end of the file in **.github/workflows/publish.yml**.

(You might have noticed `secret.GITHUB_TOKEN` in **.github/workflows/publish.yml**. You don't need to set up a secret named `GITHUB_TOKEN` actually, it is [automatically created](https://docs.github.com/en/free-pro-team@latest/actions/reference/authentication-in-a-workflow#about-the-github_token-secret))

### Publish

Now everything is set. The example package has automated tests and upload (publishing) already set up with GitHub Actions:

- Every time you `git push` or a pull request is submitted on your `master` or `main` branch, the package is automatically tested against the desired OS and Node.js versions with GitHub Actions.
- Every time an [**annotated**](https://git-scm.com/book/en/v2/Git-Basics-Tagging#_annotated_tags) (not [lightweight](https://git-scm.com/book/en/v2/Git-Basics-Tagging#_lightweight_tags)) "v*" tag is pushed onto GitHub, a GitHub release is automatically generated from this version, it also automatically publishes to the npm registry and/or GitHub Packages registry to update the package there.
  - [`npm version`](https://docs.npmjs.com/cli/version/) / [`yarn version`](https://yarnpkg.com/cli/version) is useful to create tags.
  - (npm or yarn v1, not yarn v2) You could also add `"postversion": "git push --follow-tags"` to **package.json** file to push it automatically after `npm` or `yarn` `version`.
  - (yarn v1, not v2) because `yarn version` doesn't check whether there are uncommitted changes, you can add `"preversion": "git diff-index --quiet HEAD --"` to **package.json**
    - Note: `preversion`, `postversion` doesn't work in yarn v2

For npm registry: you can unpublish a version or the whole package but can never re-publish the same version under the same name.

If you want to modify the description / README on the npm package page, you have to publish a new version. You can modify the description on GitHub Packages without publishing.

## Notes

- It uses npm but you can easily switch to yarn, of course (remember to change all "npm" in `scripts` in the file **package.json**)
  - Whether you use npm as your package manager ≠ Whether you can publish to the npm registry
- Works fine in VS Code. In my configuration **.eslintrc** and **.prettierrc** cooperate perfectly
- See `scripts` in **package.json** for other predefined script commands
- [pinst](https://github.com/typicode/pinst) is used to solve [a problem of husky](https://typicode.github.io/husky/#/?id=yarn-2)
- The installation of the package with npm, yarn v1 and yarn v2+ is ensured in [this test](https://github.com/thathurtabit/http-me-test)

## References

- [Creating and publishing unscoped public packages - npm docs](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [npm-publish - npm docs](https://docs.npmjs.com/cli/v6/commands/npm-publish)
- [Publishing - TypeScript docs](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
- [Publishing Node.js packages - GitHub Docs](https://docs.github.com/en/free-pro-team@latest/actions/guides/publishing-nodejs-packages)

Btw, if you want to publish Python package, go to [Example PyPI (Python Package Index) Package & Tutorial / Instruction / Workflow for 2021](https://github.com/thathurtabit/example_pypi_package).
