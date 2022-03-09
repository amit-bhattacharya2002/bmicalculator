const express = require("express");
const bodyParser = require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    // res.sendFile(__dirname + "/bmi.html");
    res.render('formtemp.ejs', { resultPrompt: "", agePrompt: "", weightPrompt: "", heightPrompt: "" })
});

app.post("/", function (req, res) {

    var age = Number(req.body.age);
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height) / 100;

    var result = parseFloat(weight / (height * height)).toFixed(1);

    // res.send(`
    // <div class="header" >
    //     <div class="wrapper">
    //       <form action="/" method="POST">
    //         <h1>BMI calculator</h1>
    //         <p>Insert Your Age</p>
    //         <input type="text" id="age" name="age" value="${age}">
    //         <p>Insert Weight in Kg</p>
    //         <input type="text" id="weight" name="weight"  value="${weight}">
    //         <br>
    //         <p>Insert Height in cm</p>
    //         <input type="text" id="height" name="height"  value="${height*100}">
    //         <br>
    //         <button id="calc">check</button>
    //         <p id="result">Your BMI result is : ${result}</p>
    //       </form>
    //     </div>
    // </div>
    // `);

    res.render('formtemp.ejs', { resultPrompt: "Your BMI result is : " + result, agePrompt: age, weightPrompt: weight, heightPrompt: (height * 100) });
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});
