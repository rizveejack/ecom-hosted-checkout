const allowedImageWordPressDomain = new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL).hostname
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: [`${allowedImageWordPressDomain}`]
  }
    
  
}
