const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index", {cotdolar: "", coteuro: "",cotreais: "", montanteDolar: "", montateEuro:""}) ;
} );

app.post("/calcular", function(req, res){
    let cotdolar = parseFloat(req.body.cotdolar);
    let coteuro = parseFloat(req.body.coteuro);
    let cotreais = parseFloat(req.body.cotreais);
    
   
   
     let montanteDolar = cotreais / cotdolar;
     let montateEuro = cotreais / coteuro;
    res.render("index", {cotdolar: cotdolar.toFixed(2), coteuro: coteuro.toFixed(2),
                         cotreais: cotreais.toFixed(2), montanteDolar: montanteDolar.toFixed(2), 
                         montateEuro: montateEuro.toFixed(2)});
});

app.listen(3000);
