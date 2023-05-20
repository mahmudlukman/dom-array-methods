const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionaireBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

let data = []

// Fetch random user and add money
const getRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()

  const user = data.results[0]

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }

  console.log(newUser)
}

// add new obj to data arr
const addData = (obj) => {
  data.push(obj)
}

getRandomUser()
getRandomUser()
getRandomUser()