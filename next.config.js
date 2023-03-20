/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    service_f84eeqt: process.env.EMAIL_JS_SERVICE_ID,
    template_0251zh1: process.env.EMAIL_JS_TEMPLATE_ID,
    XpqxxDJjz0HLm1k_1: process.env.EMAIL_JS_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
