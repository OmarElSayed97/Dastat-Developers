//UNIT TESTING FOR T-12
//SEARCH FOR YOUR NAME BY CTRL+F AND START WRITING IN YOUR SPECIFIED SPACE
//PLEASE TRY TO STICK TO YOUR SPECIFIED SPACE, IF YOU HAD TO USE MORE SPACE IT'S NOT A MAJOR PROBLEM
//PLEASE USE THE CURSOR TO MOVE TO THE LINE YOU WANT TO WRITE IN, USING THE ENTER BUTTON WILL MAKE THE SPAECES MADE IN THIS FILE USELESS
//EVERY TIME YOU USE THE CURSOR INSTEAD OF THE ENTER BUTTON IT WILL SAVE ME A CONFLICT TO RESOLVE :)

//Initializing Chai

// FIRST YOU HAVE TO INSTALL MOCHA AS IT'S NOT IN THE package.json ---> npm install -g mocha@2.3.1
// THEN INSTALL npm install chai@3.2.0 chai-http@1.0.0 --save-dev
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../Backend/app');
var should = chai.should();
var assert = chai.assert;
chai.use(chaiHttp);






//Amir Zaghloul

describe('Seats', function() { //This should contain all realted Tests
    it('should list the layout and booked seats on /layout/encoded GET',function(done){ //Just a Custom message to know describe what is the expected output
        chai.request("localhost:8000").get("/api/layout/encoding").query({ //This is sending the request along with my Data that i use in the Query. use this if you send your data in req.query
          cinema_name: 'Point 90',
          cinema_location: 'New Cairo',
          hall_number: '1',
          datetime: '2018-04-01 13:00:00',
        })
        .end(function(req,res){
          res.should.have.status(200); //response status should be 200 aka found
          res.should.be.json; //response type should be json
          assert.isArray(res.body.seats,'Booked Seats'); //the array of booked Seats has type of Array
          done();
        });
    });
  });




































//Joe William
describe('Movie',function(){
  it('High Rates movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/highrate")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
  it('Low Rates movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/lowrate")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
  it('Latest  movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/latest")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
  it('Oldest movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/oldest")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
  it('Action movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/Action")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
  it('Adventure movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/Adventure")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
  it('Comedy movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/Comedy")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
  it('Drama movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/Drama")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
  it('Horror movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/Horror")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
  it('Thriller movies are found' , function(done){
    chai.request("localhost:8000").get("/api/movies/Thriller")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
     done();
    });
 });
 it('Biography movies are found' , function(done){
   chai.request("localhost:8000").get("/api/movies/Bio")
   .end(function(req,res){
     res.should.have.status(200);
     res.should.be.json;
     done();
    });
  });
});








































//Youssef Raphail
























































//Ahmed Diab






















































//Omar Abdelaziz

























































//Michael Khalil & Ibram Medhat






















































//Hazem












































//Omar El-Sayed













































//Bas Rizk








































































//Steven Nassef




























































//Youssef Hatem





























































//Omar El-Dahrawy

































































//Zeyad Yasser & Nayer Ezzat

describe('HOMEPAGE', function(){
  it('Viewing Featured Movies', function(done){
    chai.request("localhost:8000").get("/api/getTopMovies")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
      assert.isArray(res.body, 'Cinema');
      done();
    });
  });
  it('Viewing Currently Showed Movies', function(done){
    chai.request("localhost:8000").get("/api/viewMovies3")
    .end(function(req,res){
      res.should.have.status(200);
      res.should.be.json;
      assert.isArray(res.body, 'Cinema');
      done();
    });
  });
});












































//Abdo Hossam


































































//Mariam Fawzy
































































//Basma Gamal
















































//Mostafa Nasr






















































//Mahmoud Khalaf































































//Daniel Ashraf

































































//Karim Abdelkader































































//George Maged
































