const express = require('express');
const app = express()
const md5 = require('md5');
class user {
  const usr = {}
  consructor(mail) {
    usr.email = mail
  }
  mkusr(name) {
    usr.auth = name
  }
  mkpass(npass) {
    usr.pass = md5(npass)
  }
  mkgrav(email = usr.email, def='retro') {
    usr.gravatar = {
      url: md5('email'),
      def: def
    }
  }
  get() {
    return usr
  }
}

app.listen(80, (err)=> {
  console.log(err?err:"Server listening on port " + port)
})
