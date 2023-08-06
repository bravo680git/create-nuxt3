#!/usr/bin/env node

import { program } from "commander";
import fs from "fs";
import path from "path";

const moduleName = process.argv[2];
const modulePath = path.join(process.cwd(), "modules", moduleName);

fs.mkdirSync(modulePath, { recursive: true });

const indexPath = path.join(modulePath, "index.ts");
const content = "hello world\n";

fs.writeFileSync(indexPath, content, "utf8");

console.log(`Module "${moduleName}" created successfully.`);

program.parse(process.argv);
