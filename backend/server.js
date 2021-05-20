const express = require('express')
const app = express()
const port = 3000

// Static Files
app.use(express.static('C:/Y_Drive/WebDev/hotel-website/hotel-website'));
// Specific folder example
app.use('C:/Y_Drive/WebDev/hotel-website/hotel-website', express.static('C:/Y_Drive/WebDev/hotel-website/hotel-website'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/', (req, res) => {
    res.sendFile('C:/Y_Drive/WebDev/hotel-website/hotel-website/index.html')
})

app.get('/contact', (req, res) => {
    res.sendFile('C:/Y_Drive/WebDev/hotel-website/hotel-website/contact.html')
})

app.get('/menu', (req, res) => {
    res.sendFile('C:/Y_Drive/WebDev/hotel-website/hotel-website/menu.html')
})

app.get('/dine_reservation', (req, res) => {
    res.sendFile('C:/Y_Drive/WebDev/hotel-website/hotel-website/dinereservation.html')
})

app.get('/room_reservation', (req, res) => {
    res.sendFile('C:/Y_Drive/WebDev/hotel-website/hotel-website/room.html')
})

app.get('/feedback', (req, res) => {
    res.sendFile('C:/Y_Drive/WebDev/hotel-website/hotel-website/feedback.html')
})



app.listen(port, () => console.info(`App listening on port ${port}`))