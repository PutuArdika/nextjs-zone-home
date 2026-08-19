const { BLOG_URL } = process.env;

if (!BLOG_URL) {
  throw new Error("BLOG_URL must be set to the deployed blog URL");
}

const blogUrl = new URL(BLOG_URL);
const deploymentUrl = process.env.VERCEL_URL;

if (deploymentUrl && blogUrl.host === deploymentUrl) {
  throw new Error("BLOG_URL must point to a separate blog deployment");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
      {
        source: "/blog",
        destination: `${blogUrl.origin}/blog`,
      },
      {
        source: "/blog/:path+",
        destination: `${blogUrl.origin}/blog/:path+`,
      },
      {
        source: "/blog-static/_next/:path+",
        destination: `${blogUrl.origin}/blog-static/_next/:path+`,
      },
      ],
    };
  },
};

module.exports = nextConfig;
