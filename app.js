const express =require("express");
const app =express();
app.set("view engine","ejs");
app.use(express.static("public"));



app.get("/", function(req,res){
  res.render("home");
})

app.post("/myskill", function(req,res){
  res.redirect("/myskill");
})


app.get("/myskill", function(req,res){
  res.render("myskill");
})

app.post("/lingue", function(req,res){
  res.redirect("/lingue");
})

app.get("/lingue", function(req,res){
  res.render("lingue");
})


app.post("/lavoro", function(req,res){
  res.redirect("/lavoro");
})

app.get("/lavoro", function(req,res){
  res.render("lavoro");
})

app.post("/progetti", function(req,res){
  res.redirect("/progetti");
})

app.get("/progetti", function(req,res){
  res.render("progetti");
})






app.listen(3000, function(){
  console.log("Server on port 3000");

});
