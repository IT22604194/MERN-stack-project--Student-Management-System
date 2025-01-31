const router = require("express").Router();
const { response } = require("express");
let Student = require("../models/Student");


//create
http://Localhost:8070/student/add

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const position = req.body.position;
    const grade = req.body.grade;
    const password = req.body.password;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
   
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        position,
        grade,
        password,
        phoneNumber,
        address,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student Added successfully")
    }).catch((err)=>{
        console.log(err);
    })
})

http://Localhost:8070/student
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})


http://Localhost:8070/student/update/5fhjkjkj

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {name,position,grade,password,phoneNumber,address,gender} = req.body;

    const updateStudent = { //create seperate obj 
        name,
        position,
        grade,
        password,
        phoneNumber,
        address,
       
        gender
    }
    //const update =
    await Student.findByIdAndUpdate(userId, updateStudent)//wait  promise for update obj
    .then(() =>{
        res.status(200).send({status: "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

    
})
http://Localhost:8070/student/delete/5fhjkjkj

router.route("/delete/:id").delete(async (req, res) =>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Student.findById(userId)
    .then((student) => {
        res.status(200).send({status: "User fetched",student})
    }).catch(() =>{
        console.log(err.message);
        res.status(500).send({status: "Error with user", error: err.message});
    })
})

module.exports = router;