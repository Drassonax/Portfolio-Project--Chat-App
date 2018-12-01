let moment = require('moment')

const generateMessage = (sender, text) => {
    return {
        from: sender,
        text,
        createdAt: moment().valueOf()
    }
}

const generateLocationMessage = (sender, latitude, longitude) => {
    return {
        from: sender,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    }
}

module.exports = { generateMessage, generateLocationMessage }