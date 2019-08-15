const Express=require("express");

    var app=new Express();

    app.set('view engine','ejs');

   
    app.get('/',(req,res)=> {
        res.render('index');
    });
    
    app.get('/login',(req,res)=>{
        res.render('login');
    });

    app.get('/register',(req,res)=>{
        res.render('register');
    });
    
    app.listen(3000,()=>{
        console.log("Server running on port::3000...");
    });




