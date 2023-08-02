class AuthUtill {
  static validateSignupFields(name, email, password, user_type ) {
    if (!name) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }

    if (!email) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }

    if (!password) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }

    if (!user_type) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }
  }

  static validateLoginFields(email,password ) {
    if (!email) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }

    if (!password) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }
  }
}



module.exports = AuthUtill;