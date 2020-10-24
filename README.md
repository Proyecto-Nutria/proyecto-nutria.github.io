# YAOS

## Pre requisites

1. [nvm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04#installing-using-nvm)
1. [yarn](https://classic.yarnpkg.com/en/docs/install/)

## Setup

1. Install node 14.10.0
    ```
    nvm install 14.10.0
    nvm use 14.10.0
    ```
1. Install react-scripts globally
    ```
    yarn global add react-scripts --save --no-bin-links
    ```
1. Install ReasonML
    ```
    yarn global add bs-platform
    ```
1. Compile the ReasonML files to javascript
    ```
    yarn build:reason
    ```

## Development

1. Start the project using:
    ```
    yarn start
    ```

    If you see ```System limit for number of file watchers```, you can solve the problem using:

    ```
    sudo sysctl -w fs.inotify.max_user_watches=100000
    ```
 1. You can see the frontend in ```localhost:8000```

### Yet An Otter System

[Site Link](https://proyecto-nutria.github.io/)
