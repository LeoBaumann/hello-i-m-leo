module.exports = {
  siteMetadata: {
    title: "Hello, I'm Leo !",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "1",
      },
    },
    {
      resolve: `gatsby-source-mysql`,
        options: {
          connectionDetails: {
            host: 'sql328.main-hosting.eu',
            user: 'u442113571_leobaumann',
            password: 'u442113571U',
            database: 'u442113571_WebSite'
          },
          queries: [
            {
              statement: 'SELECT * FROM Formations',
              idFieldName: 'id',
              name: 'Formations'
            },
            {
              statement: 'SELECT * FROM ExperiencesPro',
              idFieldName: 'id',
              name: 'ExperiencesPro'
            },
            {
              statement: 'SELECT * FROM Diplomes',
              idFieldName: 'id',
              name: 'Diplomes'
            },
            {
              statement: 'SELECT * FROM Langages',
              idFieldName: 'id',
              name: 'Langages'
            },
            {
              statement: 'SELECT * FROM Outils',
              idFieldName: 'id',
              name: 'Outils'
            },
            {
              statement: 'SELECT * FROM Projets',
              idFieldName: 'id',
              name: 'Projets'
            },
            {
              statement: 'SELECT * FROM Langues',
              idFieldName: 'id',
              name: 'Langues'
            }
          ]
        }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
