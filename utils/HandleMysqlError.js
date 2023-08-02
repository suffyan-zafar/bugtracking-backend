class HandleMysqlError {
  static isValidCode(code) {
    if (code >= 400 && code <= 500) {
      return true
    }
    return false
  }
}

module.exports = HandleMysqlError;