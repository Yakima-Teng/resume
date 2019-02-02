const { browserSync, join } = require('../utils')

module.exports = () => {
  return browserSync.init({
    server: {
      baseDir: join('/dist')
    }
  })
}
