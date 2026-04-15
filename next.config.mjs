/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "krbgvixnezlaxluylwza.supabase.co",
        port: "",
        // pathname: "/storage/v1/object/public/cabin-images/**",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
