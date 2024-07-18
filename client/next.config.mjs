import {createVanillaExtractPlugin} from "@vanilla-extract/next-plugin";
import analyzer from "@next/bundle-analyzer";

const withVanillaExtract = createVanillaExtractPlugin();

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gofoodie-images.s3.ap-northeast-2.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: 'http',
        hostname: 't1.kakaocdn.net',
        pathname: "**",
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: "/_next/image",
    loader: "default",
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true, // TEST Deploy
  },
  distDir: ".next",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  trailingSlash: true,
  swcMinify: true,
};

export default withBundleAnalyzer(withVanillaExtract(nextConfig));
