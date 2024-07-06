/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.choosepos.com",
  generateRobotsTxt: true,
  sitemapSize: 3000,
};
