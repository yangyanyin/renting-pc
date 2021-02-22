module.exports = {
  outputDir: 'server/build',
  publicPath: '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'html/index.html',
    }
  }
}