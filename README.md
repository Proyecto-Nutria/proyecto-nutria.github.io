# YAOS

## Setup

1. Install node 14.10.0 or later

   **Option 1:** Using **n**ode **v**ersion **m**anager

   1. Install **nvm** from https://github.com/nvm-sh/nvm
   1. Run below commands

   ```
   nvm install 14.10.0
   nvm use 14.10.0
   ```

   **Option 2:** Installing nodejs and npm directly

   - Debian: https://github.com/nodesource/distributions
   - Arch Linux: `pacman -S npm` (this will install both _node_ and _npm_)
   - Windows: https://nodejs.org/en/download/ (remember to add installation path to environment variables)

1. Install yarn
   ```
   npm install -g yarn
   ```
1. Install BuckleScript globally
   ```
   yarn global add bs-platform
   ```
1. Install react-scripts globally
   ```
   yarn global add react-scripts --save --no-bin-links
   ```
1. Install packages from package.json
   ```shell
   > cd proyecto-nutria.github.io
   > yarn install
   ```
1. Compile the ReasonML files to javascript
   ```
   yarn build:reason
   ```

## Development

1. Run the project using:

   ```
   yarn start
   ```

   If you see `System limit for number of file watchers`, you can solve the problem using:

   ```
   sudo sysctl -w fs.inotify.max_user_watches=100000
   ```

1. `.env` contents:
   ```shell
   EXTEND_ESLINT=true
   PORT=3000
   ```

Note: Try to split the frontend in [components and screens](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c)

### Yet An Otter System

[Site Link](https://proyecto-nutria.github.io/)
