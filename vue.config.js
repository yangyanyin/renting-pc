module.exports = {
  outputDir: 'server/build',
  publicPath: '/',
  pages: {
    html: {
      entry: 'src/main.js',
      template: 'src/index.html',
      filename: 'html/index.html'
    }
  },
  devServer: {
		historyApiFallback: {
			rewrites: [
				{ from: /^\/[\s\S]*/, to: '/html/index.html' }
			]
		}
  },
}