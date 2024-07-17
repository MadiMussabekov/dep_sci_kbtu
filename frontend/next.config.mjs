// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// Now, set up the plugin which creates an alias to provide your i18n
// configuration (specified in the next step) to Server Components.

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
