const express = require('express');
const app = express();
const dine_app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require('ejs');

app.use(bodyParser.urlencoded({extended: true}));
dine_app.use(bodyParser.urlencoded({extended: true}));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/hotelDB",{ useNewUrlParser: true ,  useUnifiedTopology: true });

const feedbackSchema= {
    f_name: String,
    l_name: String,
    email: String,
    Address: String,
    mobile: Number,
    subject: String,
    comment: String

}

const dineSchema= {
    f_name: String,
    l_name: String,
    contact: Number,
    noperson: Number,
    datereserve: Date,
    timereserve: String

}

const Feedback =mongoose.model("Feedback",feedbackSchema);

const Dine =mongoose.model("dine",dineSchema);



// Static Files
app.use(express.static(__dirname+'/public'));
// Specific folder example
app.use('C:/Y_Drive/WebDev/hotel-website/hotel-website', express.static(__dirname+'/public'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))



// Navigation
app.get('/feedback_details', (req, res) => {

    Feedback.find({}, function(err,feedbacks){
        res.render('viewfeedbackdetails', { 
        feedbackList: feedbacks 
        })
    })
})

app.get('/dine_reservation_details', (req, res) => {

    Dine.find({}, function(err,dines){
        res.render('viewdinereservations', { 
        dineList: dines 
        })
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/public/contact.html')
})

app.get('/menu', (req, res) => {
    res.sendFile(__dirname+'/public/menu.html')
})

app.get('/dine_reservation', (req, res) => {
    res.sendFile(__dirname+'/public/dinereservation.html')
})

app.get('/room_reservation', (req, res) => {
    res.sendFile(__dirname+'/public/room.html')
})

app.get('/feedback', (req, res) => {
    res.sendFile(__dirname+'/public/feedback.html')
})

app.post("/",function(req,res){
    let newFeedback = new Feedback({
        f_name: req.body.firstname,
        l_name: req.body.lastname,
        email: req.body.email,
        Address: req.body.Address,
        mobile: req.body.mobile,
        subject: req.body.subject,
        comment: req.body.comment        
    });
    newFeedback.save();
    res.redirect('/');
})

app.post("/top",function(req,res){
    let newDine = new Dine({
        f_name: req.body.firstname,
        l_name: req.body.lastname,
        contact: req.body.contact,
        noperson: req.body.nopersons,
        datereserve: req.body.datereserve,
        timereserve: req.body.timereserve
        
    });
    newDine.save();
    res.redirect('/');
})



app.listen(port, () => console.info(`App listening on port ${port} `))