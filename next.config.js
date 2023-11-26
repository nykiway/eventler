/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: {
      ssr: true,
      displayName: true,
    }
  }
}

module.exports = nextConfig
