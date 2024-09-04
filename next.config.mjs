/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ekkvpygbnhpvejlcackv.supabase.co', // Replace with your actual Supabase hostname
            port: '',
            pathname: '/**', // This allows any path on the hostname
          },
          // Add more patterns if needed
        ],
      },
};

export default nextConfig;
