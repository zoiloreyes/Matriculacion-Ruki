const express = require("express"),
      app = express(),
      cors = require("cors"),
      matriculasRoutes = require("./routes/matriculas");

app.use(cors("*"));
app.use(express.urlencoded({extended: true}));

app.use("/api/matriculas", matriculasRoutes);

app.use((error, req, res, next) => {
   if(!error) return next();
   if(!error.status){
      error.status = 404;
      error.message = "Not Found";
   }
   
   let {status, message} = error;

   res.status(error.status).json({error: {message, status}});
})

app.listen(process.env.PORT, () => {
   console.log("Server's Up");
})