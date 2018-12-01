class Users {
    constructor() {
        this.users = [],
        this.rooms = []
    }
    addUser(id, name, room) {
        let user = {
            id,
            name,
            room: room.toLowerCase()
        }
        this.users.push(user)
        if (!this.rooms.find((item) => item === room.toLowerCase())) {
            this.rooms.push(room.toLowerCase())
        }
        return user
    }
    removeUser(id) {
        let user = this.getUser(id)
        if (user) {
            this.users = this.users.filter((user) => user.id !== id)
            if (!this.users.find((item) => item.room === user.room)) {
                this.rooms = this.rooms.filter((room) => room !== user.room)
            }
        }
        return user
    }
    getUser(id) {
        return this.users.filter((user) => user.id === id)[0]
    }
    getUserList(room) {
        return this.users.filter((user) => user.room === room.toLowerCase()).map((user) => user.name)
    }
    getRoomList() {
        return this.rooms
    }
    validateName(name, room) {
        if (this.users.find((user) => (user.name === name && user.room === room))) {
            return true
        } else {
            return false
        }
    }
}

module.exports = { Users }