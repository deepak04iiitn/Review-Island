const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const Login = require("./models/logins");
const College = require("./models/colleges");
const Coaching = require("./models/coachings");
const Hospital = require("./models/hospitals");
const Hotal = require("./models/hotals");
const Restaurant = require("./models/restaurants");
const School = require("./models/schools");
const Tourist = require("./models/tourists");

const port = process.env.PORT || 3005;

const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(static_path));
app.set("view engine" , "hbs");
app.set("views" , template_path);
hbs.registerPartials(partials_path);

app.get('/' , (req,res)=> {
    res.render("index")
})

app.get("/coaching-form" , (req,res) => {
    res.render("coaching-form");
})

app.get("/college-form" , (req,res) => {
    res.render("college-form");
})

app.get("/hospitals-form" , (req,res) => {
    res.render("hospitals-form");
})

app.get("/hotal-form" , (req,res) => {
    res.render("hotal-form");
})

app.get("/index" , (req,res) => {
    res.render("index");
})

app.get("/restaurants-form" , (req,res) => {
    res.render("restaurants-form");
})

app.get("/schools-form" , (req,res) => {
    res.render("schools-form");
})

app.get("/tourist-form" , (req,res) => {
    res.render("tourist-form");
})

// creating a new user in database
// for registration

app.post("/index" , async(req , res) => {
    try {
        const registerUser = new Register({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        })

        const registered = await registerUser.save();
        res.status(201).render("index");
    }
    catch(error) {
        res.status(400).send(error);
    }
});


// for login

// for login
app.post("/login", async (req, res) => {
    try {
        const loginemail = req.body.loginemail;
        const loginpassword = req.body.loginpassword;

        const useremail = await Register.findOne({ email: loginemail });

        if (!useremail) {
            res.status(401).send("Invalid login details!"); // User not found
            return;
        }

        if (useremail.password === loginpassword) 
        {
            res.status(201).render("index");
        } 
        else 
        {
            res.status(401).send("Invalid login details!");
        }

    } catch (error) {
        res.status(400).send("Invalid login details!");
    }
});


// for college form
app.post("/college" , async(req , res) => {
    try {
        const collegeUser = new College({
            collegefirstname : req.body.collegefirstname,
            collegelastname : req.body.collegelastname,
            collegename : req.body.collegename,
            collegesubcategory : req.body.collegesubcategory,
            collegerating : req.body.collegerating,
            collegereview : req.body.collegereview
        })

        const collegerated = await collegeUser.save();
        res.status(201).render("index");
    }
    catch(error) {
        res.status(400).send(error);
    }
});


// for coaching form
app.post("/coaching" , async(req , res) => {
    try {
        const coachingUser = new Coaching({
            coachingfirstname : req.body.coachingfirstname,
            coachinglastname : req.body.coachinglastname,
            coachingname : req.body.coachingname,
            coachingsubcategory : req.body.coachingsubcategory,
            coachingrating : req.body.coachingrating,
            coachingreview : req.body.coachingreview
        })

        const coachingrated = await coachingUser.save();
        res.status(201).render("index");
    }
    catch(error) {
        res.status(400).send(error);
    }
});



// for hospital form
app.post("/hospital" , async(req , res) => {
    try {
        const hospitalUser = new Hospital({
            hospitalfirstname : req.body.hospitalfirstname,
            hospitallastname : req.body.hospitallastname,
            hospitalname : req.body.hospitalname,
            hospitalsubcategory : req.body.hospitalsubcategory,
            hospitalrating : req.body.hospitalrating,
            hospitalreview : req.body.hospitalreview
        })

        const hospitalrated = await hospitalUser.save();
        res.status(201).render("index");
    }
    catch(error) {
        res.status(400).send(error);
    }
});



// for hotal form
app.post("/hotal" , async(req , res) => {
    try {
        const hotalUser = new Hotal({
            hotalfirstname : req.body.hotalfirstname,
            hotallastname : req.body.hotallastname,
            hotalname : req.body.hotalname,
            hotalsubcategory : req.body.hotalsubcategory,
            hotalrating : req.body.hotalrating,
            hotalreview : req.body.hotalreview
        })

        const hotalrated = await hotalUser.save();
        res.status(201).render("index");
    }
    catch(error) {
        res.status(400).send(error);
    }
});




// for restaurant form
app.post("/restaurant" , async(req , res) => {
    try {
        const restaurantUser = new Restaurant({
            restaurantfirstname : req.body.restaurantfirstname,
            restaurantlastname : req.body.restaurantlastname,
            restaurantname : req.body.restaurantname,
            restaurantsubcategory : req.body.restaurantsubcategory,
            restaurantrating : req.body.restaurantrating,
            restaurantreview : req.body.restaurantreview
        })

        const restaurantrated = await restaurantUser.save();
        res.status(201).render("index");
    }
    catch(error) {
        res.status(400).send(error);
    }
});




// for school form
app.post("/school" , async(req , res) => {
    try {
        const schoolUser = new School({
            schoolfirstname : req.body.schoolfirstname,
            schoollastname : req.body.schoollastname,
            schoolname : req.body.schoolname,
            schoolsubcategory : req.body.schoolsubcategory,
            schoolrating : req.body.schoolrating,
            schoolreview : req.body.schoolreview
        })

        const schoolrated = await schoolUser.save();
        res.status(201).render("index");
    }
    catch(error) {
        res.status(400).send(error);
    }
});



// for tourist form
app.post("/tourist" , async(req , res) => {
    try {
        const touristUser = new Tourist({
            touristfirstname : req.body.touristfirstname,
            touristlastname : req.body.touristlastname,
            touristname : req.body.touristname,
            touristsubcategory : req.body.touristsubcategory,
            touristrating : req.body.touristrating,
            touristreview : req.body.touristreview
        })

        const touristrated = await touristUser.save();
        res.status(201).render("index");
    }
    catch(error) {
        res.status(400).send(error);
    }
});



app.listen(port , () => {
    console.log(`server is running at port no ${port}`);
})
