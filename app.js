const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const books = [
    {
        title:"Book1",
        description:"ome quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        title:"Book2",
        description:"ome quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        title:"Book3",
        description:"ome quick example text to build on the card title and make up the bulk of the card's content."
    },

]


app.get("/",function(req,res){
    res.redirect("/elibrary");
})

app.get("/elibrary",function(req,res){
    res.render("elibrary",{books:books});
})


app.get("/elibrary/:book",function (req,res) {

    const title = req.params.book;
    res.render("show",{title:title})
    
})




app.listen(3000, function () {
    console.log("Server started on port 3000");
  });
  