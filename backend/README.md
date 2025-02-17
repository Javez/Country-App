# Getting Started with [Backend] Country App.

## 🔧 Installation Win/Linux

1. Create folder and open in IDE;
2. Open the terminal and clone repository;
3. Clone the repository: `https://github.com/Javez/Country-App.git`;
4. Navigate to the project directory: `cd [folder_name]/backend`;
5. Install dependencies: `npm install` ([Optional] or use manual install packages with list below);
6. Add dev.env to your backend root folder;
7. Set needed env vars with example.env.txt file in root folder;
6. Congrats! You can start a project by running scripts.

## ⚙ Packages

<h3><ins> Note: This is the list of packages for manual install!</ins></h3>

```
npm install -g typescript
npm init -y
npx tsc --init

npm install axios cors cross-env dotenv envalid express

npm install --save-dev eslint/js @types/cors @types/express @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier globals nodemon prettier ts-node typescript typescript-eslint
```

<h3><ins>tsconfig.json</ins></h3>

```
{
  "compilerOptions": {
    "target": "es2016",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "module": "commonjs",
    "rootDir": "./src",
    "baseUrl": "./",
    "outDir": "./dist",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "skipLibCheck": true
  },
  "include": ["src/*.ts"],
  "exclude": ["dist", "node_modules"]
}
```

<!-- Run options -->

## 🚀 Run options

| Options    |                          Command                         |
| :-----:    | :------------------------------------------------------: |
| "start"    | `cross-env NODE_ENV=prod npx tsc && node dist/server.js` |
| "dev"      | `cross-env NODE_ENV=dev nodemon src/server.ts`           |
| "lint"     | `eslint . --ext .ts`                                     |
| "lint:fix" | `eslint . --ext .ts --fix`                               |
| "format"   | `prettier --write \"**/*.{ts,js,json}\"`                 |

## ⚡ Docker container

**N/A**

<!-- Contributing -->

## Contributing

**N/A**

<!-- License -->

## License

**N/A**

<!-- Screenshots or GIF Animations -->

## Screenshots/GIFs

<!-- Repository Info Card -->

[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=Javez&repo=Country-App)](https://github.com/Javez/Country-App)

<!-- License -->

**N/A**

<!-- Footer -->
<p align="center">
   <a>Made with ❤️ and TS</a>
   </br>
</p>
