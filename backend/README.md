npm init -y
npm install express cors dotenv axios
npm install --save-dev nodemon

{
  "compilerOptions": {
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
    "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  },
  "include": ["src/*.ts"],
  "exclude": ["dist", "node_modules"]
}