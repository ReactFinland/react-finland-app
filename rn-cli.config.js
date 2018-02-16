const blacklist = require('metro/src/blacklist')

// h/t https://github.com/oblador/react-native-vector-icons/issues/626#issuecomment-357469857
module.exports = {
  getBlacklistRE () {
    return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/])
  }
}
