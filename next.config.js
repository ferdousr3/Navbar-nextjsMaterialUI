module.exports = {
  reactStrictMode: true,
}
// module.exports = {
//   eslint: {
//     dirs: [ 'pages', 'utils' ], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
//   },
// }
module.exports = {
  // Webpack 5 is enabled by default
  // You can still use webpack 4 while upgrading to the latest version of Next.js by adding the "webpack5: false" flag
  webpack5: true,
  target: "experimental-serverless-trace",
}