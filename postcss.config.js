const colors = require('./src/styles/colors')

module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-simple-vars')({ variables: colors }),
        require('autoprefixer'),
    ]
}
