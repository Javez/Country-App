import path from 'path';
import dotenv from 'dotenv';
import { cleanEnv, str, num } from 'envalid';

dotenv.config({
  path: `${path.resolve(__dirname, `../../${String(process.env.NODE_ENV).trim()}.env`)}`,
});

console.log(
  `${path.resolve(__dirname, `../../${String(process.env.NODE_ENV).trim()}.env`)}`,
);

const validateAppEnv = () => {
  cleanEnv(process.env, {
    PORT: num(),
    BASE_URL: str(),
    POPULATION_API: str(),
    FLAG_API: str(),
  });
};

export default { validateAppEnv };
