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


    //guestbook.html needs this directory to exist in order to fetch the data from the json file
    router.get('/guestbook.json',function(req,res){
      res.sendFile(path.join(__dirname+'/guestbook.json'));
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
    app.listen(process.env.PORT || 8080);

    console.log('HTML now Running at Port 8080');
