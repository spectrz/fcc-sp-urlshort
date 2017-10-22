//Url shortener service

var express = require('express');
var app = express();

var fs = require('fs');



// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/*", function (req, res) {
  
  //get parameters
  var param = req.params[0];
  console.log('params: ' + param);
  
  //check if number or other
  if ( !isNaN(param)) {
    res.redirect(store[param]);
    //res.end("int:" + param + store[param]);
  }
  else{//if not number then see if new url
    var regex = new RegExp('https?:\/\/');
    
    //check if url
    if ( regex.test(param) ) {
      
      //if url already exists just return the short index
      if ( store.includes(param)){
        console.log('Url already present');
        var index = store.indexOf(param);
        res.end('Url: ' + param +" added!\n"
               + 'Use ' + req.get('host') + '/' + index); 
      }
      else{
        //add url if new
        store.push(param);
        console.log('Url added:' + param);

        
        //save url list to file
        fs.writeFile('urls.txt', JSON.stringify(store), function ( err, data ) {
          if (err) throw err;
          res.end('url: ' + param +" added!\n"
               + 'Use ' + req.get('host') + '/' + ( store.length - 1)); 
          console.log('Urls list saved.')
        });
      }
      
      
      
    }
    else{
      //some error
      res.end('error'); 
    }
  }
}); 


//load saved urls on startup
//using a file save for small example instead of db
fs.readFile('urls.txt', function ( err, data) {
  var urlFileLoad = true;
  if ( urlFileLoad) {

    store = JSON.parse(data);
  }
  else {
    store = ['blankItemIgnore', 'http://www.google.com', 'http://www.yahoo.com', 'http://www.wikipedia.com'];
  }
  console.log(store);
  
}); 

//var store = ['http://www.google.com', 'http://www.google.com', 'http://www.yahoo.com', 'http://www.wikipedia.com'];
var store; 

 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  console.log(store);
});
