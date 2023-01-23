/** @type {import('next-sitemap').IConfig} */

const baseUrl = 'https://iya.vercel.app' // actually nevermind
module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
}
