//UNIT TESTING FOR T-12
//SEARCH FOR YOUR NAME BY CTRL+F AND START WRITING IN YOUR SPECIFIED SPACE
//PLEASE TRY TO STICK TO YOUR SPECIFIED SPACE, IF YOU HAD TO USE MORE SPACE IT'S NOT A MAJOR PROBLEM
//PLEASE USE THE CURSOR TO MOVE TO THE LINE YOU WANT TO WRITE IN, USING THE ENTER BUTTON WILL MAKE THE SPAECES MADE IN THIS FILE USELESS
//EVERY TIME YOU USE THE CURSOR INSTEAD OF THE ENTER BUTTON IT WILL SAVE ME A CONFLICT TO RESOLVE :)

//Initializing Chai

// FIRST YOU HAVE TO INSTALL MOCHA AS IT'S NOT IN THE package.json ---> npm install -g mocha@2.3.1
// THEN INSTALL npm install chai@3.2.0 chai-http@1.0.0 --save-dev
// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var server = require('../Backend/app');
// var should = chai.should();
// var assert = chai.assert;
// chai.use(chaiHttp);


// //Amir Zaghloul
// describe('Seats', function() { //This should contain all realted Tests
//   it('should add a new layout on /layout/add post',function(done){ //Just a Custom message to know describe what is the expected output
//       chai.request("localhost:8000").post("/api/layout/add").send({
//          encoded: '[{"margin":false,"row":["offset","offset","offset","offset",{"seat":{"number":"A5"}},{"seat":{"number":"A6"}},{"seat":{"number":"A7"}},{"seat":{"number":"A8"}},{"seat":{"number":"A9"}},{"seat":{"number":"A10"}},"offset","offset","offset","offset"]},{"margin":false,"row":[{"seat":{"number":"B1"}},{"seat":{"number":"B2"}},{"seat":{"number":"B3"}},"offset",{"seat":{"number":"B5"}},{"seat":{"number":"B6"}},{"seat":{"number":"B7"}},{"seat":{"number":"B8"}},{"seat":{"number":"B9"}},{"seat":{"number":"B10"}},"offset",{"seat":{"number":"B12"}},{"seat":{"number":"B13"}},{"seat":{"number":"B14"}}]},{"margin":false,"row":[{"seat":{"number":"C1"}},{"seat":{"number":"C2"}},{"seat":{"number":"C3"}},"offset",{"seat":{"number":"C5"}},{"seat":{"number":"C6"}},{"seat":{"number":"C7"}},{"seat":{"number":"C8"}},{"seat":{"number":"C9"}},{"seat":{"number":"C10"}},"offset",{"seat":{"number":"C12"}},{"seat":{"number":"C13"}},{"seat":{"number":"C14"}}]},{"margin":false,"row":[{"seat":{"number":"D1"}},{"seat":{"number":"D2"}},{"seat":{"number":"D3"}},"offset",{"seat":{"number":"D5"}},{"seat":{"number":"D6"}},{"seat":{"number":"D7"}},{"seat":{"number":"D8"}},{"seat":{"number":"D9"}},{"seat":{"number":"D10"}},"offset",{"seat":{"number":"D12"}},{"seat":{"number":"D13"}},{"seat":{"number":"D14"}}]},{"margin":false,"row":[{"seat":{"number":"E1"}},{"seat":{"number":"E2"}},{"seat":{"number":"E3"}},"offset",{"seat":{"number":"E5"}},{"seat":{"number":"E6"}},{"seat":{"number":"E7"}},{"seat":{"number":"E8"}},{"seat":{"number":"E9"}},{"seat":{"number":"E10"}},"offset",{"seat":{"number":"E12"}},{"seat":{"number":"E13"}},{"seat":{"number":"E14"}}]},{"margin":true,"row":["offset","offset",{"seat":{"number":"F3"}},"offset",{"seat":{"number":"F5"}},{"seat":{"number":"F6"}},{"seat":{"number":"F7"}},{"seat":{"number":"F8"}},{"seat":{"number":"F9"}},{"seat":{"number":"F10"}},"offset",{"seat":{"number":"F12"}},"offset","offset"]},{"margin":false,"row":[{"seat":{"number":"G1"}},{"seat":{"number":"G2"}},{"seat":{"number":"G3"}},"offset","offset","offset","offset","offset","offset","offset","offset",{"seat":{"number":"G12"}},{"seat":{"number":"G13"}},{"seat":{"number":"G14"}}]},{"margin":false,"row":[{"seat":{"number":"H1"}},{"seat":{"number":"H2"}},{"seat":{"number":"H3"}},"offset","offset","offset","offset","offset","offset","offset","offset",{"seat":{"number":"H12"}},{"seat":{"number":"H13"}},{"seat":{"number":"H14"}}]},{"margin":true,"row":[{"seat":{"number":"I1"}},{"seat":{"number":"I2"}},{"seat":{"number":"I3"}},"offset","offset","offset","offset","offset","offset","offset","offset",{"seat":{"number":"I12"}},{"seat":{"number":"I13"}},{"seat":{"number":"I14"}}]},{"margin":false,"row":[{"seat":{"number":"J1"}},{"seat":{"number":"J2"}},{"seat":{"number":"J3"}},"offset",{"seat":{"number":"J5"}},{"seat":{"number":"J6"}},{"seat":{"number":"J7"}},{"seat":{"number":"J8"}},{"seat":{"number":"J9"}},{"seat":{"number":"J10"}},"offset",{"seat":{"number":"J12"}},{"seat":{"number":"J13"}},{"seat":{"number":"J14"}}]},{"margin":false,"row":[{"seat":{"number":"K1"}},{"seat":{"number":"K2"}},{"seat":{"number":"K3"}},"offset",{"seat":{"number":"K5"}},{"seat":{"number":"K6"}},{"seat":{"number":"K7"}},{"seat":{"number":"K8"}},{"seat":{"number":"K9"}},{"seat":{"number":"K10"}},"offset",{"seat":{"number":"K12"}},{"seat":{"number":"K13"}},{"seat":{"number":"K14"}}]}]',
//          name:'E'
//       })
//       .end(function(req,res){
//         res.should.have.status(200); //response status should be 200 aka found
//         res.should.be.json; //response type should be json
//         done();
//       });
//   });
// });


// //Amir Zaghloul

// describe('Seats', function() { //This should contain all realted Tests
//     it('should list the layout and booked seats on /layout/encoded GET',function(done){ //Just a Custom message to know describe what is the expected output
//         chai.request("localhost:8000").get("/api/layout/encoding").query({ //This is sending the request along with my Data that i use in the Query. use this if you send your data in req.query
//           cinema_name: 'Point 90',
//           cinema_location: 'New Cairo',
//           hall_number: '1',
//           datetime: '2018-04-01 13:00:00',
//         })
//         .end(function(req,res){
//           res.should.have.status(200); //response status should be 200 aka found
//           res.should.be.json; //response type should be json
//           assert.isArray(res.body.seats,'Booked Seats'); //the array of booked Seats has type of Array
//           done();
//         });
//     });
//   });




































// //Joe William
// describe('Movie',function(){
//   it('High Rates movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/highrate")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//   it('Low Rates movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/lowrate")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//   it('Latest  movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/latest")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//   it('Oldest movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/oldest")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//   it('Action movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/Action")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//   it('Adventure movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/Adventure")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//   it('Comedy movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/Comedy")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//   it('Drama movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/Drama")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//   it('Horror movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/Horror")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//   it('Thriller movies are found' , function(done){
//     chai.request("localhost:8000").get("/api/movies/Thriller")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//      done();
//     });
//  });
//  it('Biography movies are found' , function(done){
//    chai.request("localhost:8000").get("/api/movies/Bio")
//    .end(function(req,res){
//      res.should.have.status(200);
//      res.should.be.json;
//      done();
//     });
//   });
// });








































// //Youssef Raphail
























































// //Ahmed Diab






















































// //Omar Abdelaziz

























































// //Michael Khalil & Ibram Medhat






















































// //Hazem












































// //Omar El-Sayed













































// //Bas Rizk

// describe('Booking Tickets', () => {
//         it('it should make Reservations', (done) => {
//             let bookingDetails = {
//                 "username": "mai_emad",
//                 "cinema_name": "Point 90",
//                 "cinema_location": "New Cairo",
//                 "date": "2018-04-01",
//                 "time": "10:00:00",
//                 "hall": "2",
//                 "payment": true,
//                 "tickets": [3, 31, 32],
//                 "price": 150,
//                 "movie": 26,
//                 //"comment": "abc"
//             };
//             chai.request(server)
//                 .post('/api/userBooking/makeReservation')
//                 .send(bookingDetails)
//                 .end((err, res) => {
//                     console.log(res);
//                     res.should.have.status(200);
//                     done();
//                 });
//         });

//     it('it should fail to reserve given null inputs', (done) => {
//         let bookingDetails = {
//             "username": null,
//             "cinema_name": null,
//             "cinema_location": null,
//             "date": "2018-04-01",
//             "time": "10:00:00",
//             "hall": null,
//             "payment": true,
//             "tickets": [3, 31, 32],
//             "price": 150,
//             "movie": 26,
//             "comment": "abc"
//         };
//         chai.request(server)
//             .post('/api/userBooking/makeReservation')
//             .send(bookingDetails)
//             .end((err, res) => {
//                 res.should.have.status(422);
//                 done();
//             });
//     });
// });






































































// //Steven Nassef




























































// //Youssef Hatem
// describe('Using Promocode', () =>{
//         it('It should update the price by deducting the amount in the promocode', (done) => { //testing when the promocode exists in the cinema
//             let promocodeDetails = {
//                  "price": 1500,
//                  "code": "1H4H1LS0W",
//                  "name": "Pharoahs Cinema",
//                  "location": "Al Haram"
//               };
//               chai.request(server)
//                   .post('/api/userBooking/usePromoCode')
//                   .send(promocodeDetails)
//                   .end((err, res) => {
//                       res.should.have.status(200);
//                       done();
//                   });
//         });
//         it('it should not update the price and respond with 404 error since the promocode is not in the specified cinema', (done) => {//testing when the promocode does not exist in the cinema
//             let promocodeDetails = {
//                 "price": 1500,
//                 "code": "1H4H1LS0W",
//                 "name": "Cinema Mawlana",
//                 "location": "Mokattam"
//              };
//              chai.request(server)
//                   .post('/api/userBooking/usePromoCode')
//                   .send(promocodeDetails)
//                   .end((err, res) => {
//                       res.should.have.status(404);
//                       done();
//                   });
//        });
// });





























// //Omar El-Dahrawy

































































// //Zeyad Yasser & Nayer Ezzat

// describe('HOMEPAGE', function(){
//   it('Viewing Featured Movies', function(done){
//     chai.request("localhost:8000").get("/api/getTopMovies")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//       assert.isArray(res.body, 'Cinema');
//       done();
//     });
//   });
//   it('Viewing Currently Showed Movies', function(done){
//     chai.request("localhost:8000").get("/api/viewMovies3")
//     .end(function(req,res){
//       res.should.have.status(200);
//       res.should.be.json;
//       assert.isArray(res.body, 'Cinema');
//       done();
//     });
//   });
// });












































// //Abdo Hossam


































































// //Mariam Fawzy
































































// //Basma Gamal
















































// //Mostafa Nasr






















































// //Mahmoud Khalaf































































// //Daniel Ashraf

































































// //Karim Abdelkader































































// //George Maged
