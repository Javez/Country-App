import validateEnv from "@/utils/validateEnv";
import type { NextConfig } from "next";

validateEnv.validateAppEnv();

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
