const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/edgarf/apps/gatsby/portfoliosite/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/edgarf/apps/gatsby/portfoliosite/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/edgarf/apps/gatsby/portfoliosite/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/edgarf/apps/gatsby/portfoliosite/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/edgarf/apps/gatsby/portfoliosite/src/pages/index.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/edgarf/apps/gatsby/portfoliosite/src/templates/blog.js")))
}

