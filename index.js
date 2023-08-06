#!/usr/bin/env node

import { program } from "commander";
import download from "download-git-repo";
import ora from "ora";
import path from "path";

const projectName = process.argv[2];
const spinner = ora("Creating project...").start();
const repoUrl = `direct:https://github.com/bravo680git/project1.git#main`;

const targetDir = path.join(process.cwd(), projectName);

download(repoUrl, targetDir, { clone: true }, (err) => {
    if (err) {
        spinner.fail("Failed to create project");
        console.log(err);
    } else {
        spinner.succeed("Project created successfully");
    }
});

program.parse(process.argv);
