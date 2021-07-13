module.exports = {
  plugins: [

    // Development Plugins
    require('cssnano')({
      preset: 'default'
    }),
    require('autoprefixer'),
    require('postcss-hexrgba'),
    require('postcss-import'),
    require('precss')
  ]
}
