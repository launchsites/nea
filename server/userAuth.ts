import { queryDatabase } from "./database"
import {validate} from "./validation"

// Adding new users to the database
// Checking if username, email, password match

export async function addUser(username: string, email: string, passwordhash: string) {

  let userNameValid = validate(username, "username")
  let emailValid = validate(email, "email")

  if (!userNameValid || !emailValid) { return false}

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
