import { queryDatabase } from "./database"
import {validate} from "./validation"

// Adding new users to the database
// Checking if username, email, password match

export async function addUser(username: string, email: string, password: string) {

  
  let userNameValid = false
  let emailValid = false
  let passwordValid = false

  if (validate(username, "string")) {
    userNameValid = validate(username, "username")
  }

  if (validate(email, "email")) {
    emailValid = validate(email, "email")
  }

  let passwordhash = ""
  if (validate(password, "string")) {
    if (validate(password, "password")) {
      passwordhash = hash(password)
      passwordValid = true
    }
  }

  if (!userNameValid || !emailValid || !passwordValid) { return false}

  let usernameExists = await queryDatabase(`SELECT EXISTS (SELECT 1 FROM users WHERE username = '${username}');`)
  let emailExists = await queryDatabase(`SELECT EXISTS (SELECT 1 FROM users WHERE email = '${email}');`)
  
  const exists: boolean = usernameExists[0].exists || emailExists[0].exists

  if (exists) {return false}

  else if (!exists) {
    await queryDatabase(`INSERT INTO users (username, email, passwordhash) VALUES ('${username}', '${email}', '${passwordhash}');`)
    return true
  }

  return false
}

export async function authenticateUser(username: string, email: string, password: string) {

  let userNameValid = false
  let emailValid = false
  let passwordValid = false

  if (validate(username, "string")) {
    userNameValid = validate(username, "username")
  }

  if (validate(email, "email")) {
    emailValid = validate(email, "email")
  }


  let passwordhash = ""
  if (validate(password, "string")) {
    if (validate(password, "password")) {
      passwordhash = hash(password)
      passwordValid = true
    }
  }

  if (!userNameValid || !emailValid || !passwordValid) { return false}

  let correctDetailsArray = await queryDatabase(`SELECT EXISTS (SELECT 1 FROM users WHERE username = '${username}' AND email = '${email}' AND passwordhash = '${passwordhash}');`)

  const correctDetails: boolean = correctDetailsArray[0].exists

  if (correctDetails) {
    let userId = await queryDatabase(`SELECT id FROM users WHERE username = '${username}'`)
    userId = userId[0].id
    return userId
  }
  return false
}

function hash(password: string) {
  let binary = ""
  for (let i = 0; i < password.length; i++) {
    binary += `${password.charCodeAt(i).toString(2)}`
  }

  let originalLength = binary.length

  binary += "1"

  while (binary.length % 512 != 448) {
    binary += "0"
  }

  let origionalLengthBit = originalLength.toString(2).padStart(64, "0");
  binary += origionalLengthBit

  let baseTen = BigInt("0b" + binary)

  baseTen %= BigInt(2) ** BigInt(64)

  return baseTen.toString(16).padStart(16, "0")
}