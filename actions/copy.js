const shell = require("shelljs")
const fs  =require("fs")

const packageJson = JSON.parse(fs.readFileSync("package.json"));
const dependencies = packageJson.dependencies
const type = packageJson.type;

fs.writeFileSync("./build/package.json", JSON.stringify({
    main:"./index.js",
    type: type,
    scripts:{
        "start": "node ./index.js"
    },
    dependencies: dependencies,
}));

shell.cp("-R", [".env"], "build/.env");