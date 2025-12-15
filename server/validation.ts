export function validate(variable: any, condition: "string" | "number" | "email" | "password" | "username") {


// check if string
if (condition == "string"){
  if (typeof variable == "string") {return true}
  return false
}

// check if number
if (condition == "number"){
  if (typeof variable == "number") {return true}
  return false
}

// check if email
if (condition == "email"){

  let atInstances: number[] = []
  let dotInstances: number[] = []

  let end = -1
  let validChars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890@."
  //record . and @
  for (let i = 0; i < variable.length; i++) {
    let current = variable[i]
    if (current == "@") {atInstances = [...atInstances, i]}
    if (current == ".") {dotInstances = [...dotInstances, i]}
    if (!validChars.includes(current)) {
      return false
    }
    end += 1
  }

  // return false if dot or @ are first or last
  const start = 0
  if (variable[start] == "." || variable[start] == "@" || variable[end] =="." || variable[end] == "@"){
    return false
  }

  // false if more than one . or @
  if (atInstances.length != 1 || dotInstances.length != 1) {return false}

  // false if . comes before @
  if (atInstances[0] > dotInstances[0]) {return false}

  //  false if . comes straight after @
  if (dotInstances[0] - atInstances[0] < 2) {return false}

  //length check
  if (variable.length > 200) {return false}
  
  return true
}

// check if password
if (condition == "password"){
  // is the length between 7 and 20
  if (variable.length < 7 || variable.length > 20) {return false}


  let specCount= 0
  let numCount = 0
  let upCount = 0

  let specs = "?.!@£#"
  let nums = "1234567890"
  
  for (let i = 0; i < variable.length; i++){

    let current = variable[i]
  // is there a special character
    if (specs.includes(current)) {specCount += 1}

  // is there at least a number
    if (nums.includes(nums)) {numCount += 1}

  // is there at least an uppercase character
    if (current.toUpperCase() == current) {upCount += 1}
    
  }

  if (specCount < 1 || numCount < 1 || upCount < 1) {return false}

  return true
}

// check if username
if (condition == "username"){

  if (variable.length > 30 || variable.length < 1) {return false}

  let validChars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"

  for (let i = 0; i < variable.length; i++) {
    if (!validChars.includes(variable[i])) {
      return false
    }
  }
  
  return true
  
}
  return false
  
}