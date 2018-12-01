let expect = require('expect')
let { generateMessage, generateLocationMessage } = require('./message')

describe('generate message', () => {
    it('should generate correct message object', () => {
        let sender = 'Jen'
        let text = 'Some message'
        let message = generateMessage(sender, text)

        expect(typeof message.createdAt).toBe('number')
        expect(message).toHaveProperty('from', sender)
        expect(message).toHaveProperty('text', text)
    })
})

describe('generate location message', () => {
    it('should generate correct location message object', () => {
        let sender = 'Deb'
        let latitude = 15
        let longitude = 19
        let url ='https://www.google.com/maps?q=15,19'
        let locationMessage = generateLocationMessage(sender, latitude, longitude)

        expect(typeof locationMessage.createdAt).toBe('number')
        expect(locationMessage).toHaveProperty('from')
        expect(locationMessage).toHaveProperty('url')
    })
})