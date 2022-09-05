const api = require("../../api.json")
const { Users } = require("../db")

//cargar todos los usuarios a la base de datos
const users = async (req, res) => {
    const data = await api.users
    
    await data.forEach(e => {
         Users.findOrCreate({
          where: { firstname: e.firstname, lastname: e.lastname, isAdmin: e.isAdmin, address: e.address, password: e.password}
        })
    })
    const usersDB = await Users.findAll()
    res.send(usersDB)

}

module.exports = {users}