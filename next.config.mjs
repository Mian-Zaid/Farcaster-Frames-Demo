/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/google',
          destination: 'https://www.google.com/',
          permanent: false
        },
        {
          source: '/youtube',
          destination: 'https://www.youtube.com/',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;