const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// app.use((request, response,next)=>{
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.setHeader("Access-Control-Allow-Methods", "*");
//     response.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// });

app.use(cors());
app.use(express.json());



app.get("/emps",(request, response)=>{
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'manager',
        database : 'KnowIT'
      });
       
      connection.connect();
       
      connection.query('select * from Emp', (error, result)=> 
        {
        if (error) throw error;
        
        response.setHeader("Content-Type", "application/json")
        response.send(result)
        
    });
       
      connection.end();
});

app.post("/emps",(request, response)=>{

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'manager',
        database : 'KnowIT'
      });
    
      var Name = request.body.Name;
      var Address = request.body.Address;

      var query = `insert into Emp(Name, Address) values 
                   ('${Name}', '${Address}')`;
    
      console.log(query);
    
      connection.connect();
       
      connection.query(query, (error, result)=> 
        {
        if (error) throw error;
        
        response.setHeader("Content-Type", "application/json")
        response.send(result)
        
    });
       
      connection.end();
});

app.put("/emps/:No",(request, response)=>{

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'manager',
        database : 'KnowIT'
      });
    
      var No = request.params.No;
      var Name = request.body.Name;
      var Address = request.body.Address;

      var query = `update Emp 
                   set Name = '${Name}',
                   Address = '${Address}'
                    where No = ${No}`;
    
      console.log(query);
    
      connection.connect();
       
      connection.query(query, (error, result)=> 
        {
        if (error) throw error;
        
        response.setHeader("Content-Type", "application/json")
        response.send(result)
        
    });
       
      connection.end();
});

app.delete("/emps/:No",(request, response)=>{

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'manager',
        database : 'KnowIT'
      });
    
      var No = request.params.No;


      var query = `delete from Emp where No = ${No}`;
    
      console.log(query);
    
      connection.connect();
       
      connection.query(query, (error, result)=> 
        {
        if (error) throw error;
        
        response.setHeader("Content-Type", "application/json")
        response.send(result)
        
    });
       
      connection.end();
});

app.listen(9898, ()=>{console.log("server started");});
