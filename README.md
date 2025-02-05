# Init a Express TS project

This repository works with the `npx` command in console. The repository helps you to create an Express init configuration with Typescript. It clones another repository with this configuration but it receives the name of your proyecto

```bash
npx init-node-typescript <your-project-name>
```

Automatically, it creates a folder with all the configurations inside.

## Package file

By default, this brings you some scripts to init your project. Of course, you can change them later in case you need.

```json
"scripts": {
    "build": "rimraf dist && npx tsc",
    "start": "node dist/server.js",
    "dev": "concurrently \"npx tsc -w\"  \"nodemon dist/server.js\"",
    "deploy": "npm run build && npm run start"
}
```

As you can see, by default we need some dependencies to make this project start. They are included in the `package.json` and installed when you run the initial command.

## Dependencies

- express (& `@types`)
- concurrently
- rimraf
- typescript

## Development dependecies

- nodemon