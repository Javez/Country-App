# Getting Started with [Frontend] Country App.

## 🔧 Installation Win/Linux

1. Navigate to the project directory: `cd [folder_name]/frontend`;
2. Install dependencies: `npm install` ([Optional] or use manual install packages with list below);
3. Add dev.env to your backend root folder;
4. Set needed env vars with example.env.txt file in root folder;
5. Congrats! You can start a project by running scripts.

## ⚙ Packages

<h3><ins> Note: This is the list of packages for manual install!</ins></h3>

```
npm install -g typescript
npx create-next-app@latest . --typescript
npm install

```

<h3><ins>tsconfig.json</ins></h3>

```
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

<!-- Run options -->

## 🚀 Run options

| Options  |                          Command                         |
| :-----:  | :------------------------------------------------------: |
| "dev"    | `cross-env NODE_ENV=dev next dev --turbopack`            |
| "build"  | `next build`                                             |
| "start"  | `next start`                                             |
| "lint"   | `next lint`                                              |

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
