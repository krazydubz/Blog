var express = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");
    
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
   res.render("index"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server is running...");
});