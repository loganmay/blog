require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    
    // Used for the title template on pages other than the index site
    siteTitleAlt: `The Personal Blog of Logan May`,

    // Default title of the page
    // siteTitleAlt: `Emilia - @lekoarts/gatsby-theme-emilia`,

    // Can be used for e.g. JSONLD
    // siteHeadline: `Emilia - Gatsby Theme from @lekoarts`,

    // Will be used to generate absolute URLs for og:image etc.

    siteUrl: `https://loganmay.com/blog/`,
    // Used for SEO
    // siteDescription: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI. Includes Light/Dark mode.`,

    // Will be set on the <html /> tag
    siteLanguage: `en`,

    // Used for og:image and must be placed inside the `static` folder
    // siteImage: `/banner.jpg`,
    
    // Twitter Handle
    author: `@_loganmay`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: "The Personal Blog of Logan May",
        location: "USA",
        socialMedia: [
          {
            title: "GitHub",
            href: "https://github.com/loganmay"
          },
          {
            title: "DevPost",
            href: "https://devpost.com/loganmay"
          },
          {
            title: "Instagram",
            href: "https://www.instagram.com/_loganmay/"
          },
          {
            title: "Facebook",
            href: "https://www.facebook.com/lol0lol0lol0"
          },
          {
            title: "Twitter",
            href: "https://twitter.com/_loganmay"
          },
          {
            title: "LinkedIn",
            href: "https://linkedin.com/in/logan-may/"
          },
        ],
        showThemeAuthor: false,
        formatString: "MM-DD-YYYY"
      },
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - @lekoarts/gatsby-theme-emilia`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
