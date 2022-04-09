var http = require("http");
http.createServer(function (request, response) {

    // Send the HTTP header. HTTP Status: 200 = OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});

    const express = require('express');
    const app = express();
    const path = require('path');
    const router = express.Router();
    
    router.get('/',function(req,res){
      res.sendFile(path.join(__dirname+'/index.html'));
      //__dirname : It will resolve to your project folder.
    });
    
    router.get('/guestbook',function(req,res){
      res.sendFile(path.join(__dirname+'/guestbook.html'));
    });
    
    router.get('/newmessage',function(req,res){
      res.sendFile(path.join(__dirname+'/newmessage.html'));
    });

    router.get('/ajaxmessage',function(req,res){
      res.sendFile(path.join(__dirname+'/ajaxmessage.html'));
    });
    
    //add the router
    app.use('/', router);
    app.use(express.static('public'));
    app.listen(process.env.port || 3000);
    
    console.log('HTML now Running at Port 3000');

  }).listen(8081);

  // Console will print the message - Will attempt to fix the port thing if i have time
  console.log('Server running at http://127.0.0.1:8081/ - Go to port 8081 in the browser if you do not get port 3000 message in command prompt');

  
  
