const url = 'https://hv-chat-app.herokuapp.com'

fetch(`${url}/roomList`)
    .then((response) => response.json())
    .then((rooms) => {
        rooms.forEach((room) => {
            const liNum = document.getElementById('room-list').childElementCount
            let liClass = liNum % 2 === 0 ? 'even' : 'odd'
            const liElement = document.createElement('li')
            liElement.setAttribute('class', liClass)
            liElement.textContent = room
            document.getElementById('room-list').appendChild(liElement)
        })
    })