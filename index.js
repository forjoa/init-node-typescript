#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Initializing Express Typescript Project...');

// base repo url
const repoUrl = 'https://github.com/forjoa/express-ts.git';

// project folder name
const projectName = process.argv[2] || 'my-express-ts';

// clone repo
exec(`git clone ${repoUrl} ${projectName}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error cloning repository: ${error}`);
        return;
    }

    console.log('Repository cloned successfully in folder:', projectName);
    console.log('Installing dependencies...');

    // install dependencies
    exec(`cd ${projectName} && npm install`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error installing dependencies: ${error}`);
            return;
        }

        console.log('Dependencies installed successfully!');

    });
});
