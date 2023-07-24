class AuthUtill {
  static validateSignupFields(body) {
    if (!body.name) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }

    if (!body.email) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }

    if (!body.password) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }

    if (!body.user_type) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }
  }

  static validateLoginFields(body) {
    if (!body.email) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }

    if (!body.password) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }
  }
}



module.exports = AuthUtill;