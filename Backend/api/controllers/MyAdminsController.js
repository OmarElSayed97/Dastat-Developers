//OUR DATABASE IS HERE
var database = require('../config/db-connection');
var config = require('../config/config');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


//User stories related to the MyAdmins should be implemented here
//DONT FORGET TO ADD IT IN THE ROUTES

//------------------------- Admin Login -----------------------------------

module.exports.authenticate = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    if(!username){
        return res.status(422).json({
        err: null,
        msg: 'Username is required.',
        data: null
        });
    }
    if(!password){
        return res.status(422).json({
        err: null,
        msg: 'Password is required.',
        data: null
        });
    }
    var query = 'SELECT * FROM admins WHERE username = ?';
    database.query(query,[username], function(err, results, fields) {
    if(err) return next(err); 
    if(results.length > 0) { 
        var admin = {
        username: results[0].username,
        password: results[0].password,
        email: results[0].email,
        salary: results[0].salary,
        type: results[0].type,
        first_name: results[0].first_name,
        last_name: results[0].last_name,
        phone_number: results[0].phone_number,
        gender: results[0].gender,
    }
    bcrypt.compare(password, results[0].password, function(err, isMatch){
        if(isMatch){
            if (results[0].active==true){
            var token = jwt.sign(user, config.secret, {
            expiresIn: 604800
            });
            res.status(200).json({
                err: null,
                msg: "Logged in successfully",
                token: 'JWT' + token,
                data: token,
                success: true
            });
            }
        else {
            res.status(200).json({
            err: null,
            msg: "please Verify the account",
            success: false
            });
        }
        }
        else {
            res.status(200).json({
            err: null,
            msg: "Wrong Password",
            success: false
            });
        }
    });      
    }
    else {
        res.status(200).json({
        err: null,
        msg: "Wrong Username",
        success: false
        });
    }
    });
}

//------------------------- View all admins -------------------------------




























//------------------------- Show Admins working in a certain Cinema -------------------------------

module.exports.getAdmin = function(req, res, next){
    var cinema_name = req.body.cinema_name;
    var query = "select DISTINCT cinema_name, username, email, type, first_name, last_name, phone_number, gender from admins_cinemas C, admins A where C.admin = A.username AND cinema_name = ?";
    database.query(query, [cinema_name], function(err, results, fiels) {
        if(err) return next(err);
        console.log(results);
        return res.send(results);
    });
}





//------------------------- View all Users -------------------------------



























//------------------------- View all Booking ushers -------------------------------



























//------------------------- Add Booking ushers -------------------------------



























//------------------------- Edit Booking ushers -------------------------------

module.exports.editBookingUsher = function(req, res, next){
    var username = req.body.username;
    var user = 'select * from admins where username = ? AND type = "Booking Usher"';
    database.query(user, [username], function(err, results, fiels) {
        console.log("tested");
        if(err) return next(err);
        if(results.length > 0){
            var email = req.body.email;
            var salary = req.body.salary;
            var type = req.body.type;
            var phone_number = req.body.phone_number;
            if(!email){
                email = results[0].email;
            }
            if(!salary){
                salary = results[0].salary;
            }
            if(!type){
                type = results[0].type;
            }
            if(!phone_number){
                phone_number = results[0].phone_number;
            }
            var query = 'UPDATE admins SET email = ?, salary = ?, type = ?, phone_number = ? where username = ? AND type = "Booking Usher"';
            database.query(query, [email, salary, type, phone_number, username], function(err, results, fiels) {
            if(err) return next(err);
            return res.send(results);
            });  
        }      
        else {
            res.status(200).json({
            err: null,
            msg: "wrong username or invalid admin type",
            success: false
            });
        }
    });
}
//------------------------- Delete Booking ushers -------------------------------

module.exports.deleteBookingUsher = function(req, res, next){
    var username = req.body.username;
    var user = 'select * from admins where username = ? AND type = "Booking Usher"';
    database.query(user, [username], function(err, results, fiels) {
        if(err) return next(err);
        if(results.length > 0){
            var query = 'DELETE FROM admins_cinemas where admin = ?';
            database.query(query, [username], function(err, results, fiels) {
            if(err) return next(err);
            });
            var query = 'DELETE FROM admins where username = ? AND type = "Booking Usher"';
            database.query(query, [username], function(err, results, fiels) {
            if(err) return next(err);
            return res.send(results);
            });
        }      
        else {
            res.status(200).json({
            err: null,
            msg: "wrong username or invalid admin type",
            success: false
            });
        }
    });
}

//------------------------- View all Branch managers -------------------------------



























//------------------------- Add Branch managers -------------------------------



























//------------------------- Edit Branch managers -------------------------------

module.exports.editBranchManager = function(req, res, next){
    var username = req.body.username;
    var user = 'select * from admins where username = ? AND type = "Branch Manager"';
    database.query(user, [username], function(err, results, fiels) {
        console.log("tested");
        if(err) return next(err);
        if(results.length > 0){
            var email = req.body.email;
            var salary = req.body.salary;
            var type = req.body.type;
            var phone_number = req.body.phone_number;
            if(!email){
                email = results[0].email;
            }
            if(!salary){
                salary = results[0].salary;
            }
            if(!type){
                type = results[0].type;
            }
            if(!phone_number){
                phone_number = results[0].phone_number;
            }
            var query = 'UPDATE admins SET email = ?, salary = ?, type = ?, phone_number = ? where username = ? AND type = "Branch Manager"';
            database.query(query, [email, salary, type, phone_number, username], function(err, results, fiels) {
            if(err) return next(err);
            return res.send(results);
            });  
        }      
        else {
            res.status(200).json({
            err: null,
            msg: "wrong username or invalid admin type",
            success: false
            });
        }
    });
}

//------------------------- Delete Branch managers -------------------------------


module.exports.deleteBranchManager = function(req, res, next){
    var username = req.body.username;
    var user = 'select * from admins where username = ? AND type = "Branch Manager"';
    database.query(user, [username], function(err, results, fiels) {
        if(err) return next(err);
        if(results.length > 0){
            var query = 'DELETE FROM admins_cinemas where admin = ?';
            database.query(query, [username], function(err, results, fiels) {
            if(err) return next(err);
            });
            var query = 'DELETE FROM admins where username = ? AND type = "Branch Manager"';
            database.query(query, [username], function(err, results, fiels) {
            if(err) return next(err);
            return res.send(results);
            });  
        }      
        else {
            res.status(200).json({
            err: null,
            msg: "wrong username or invalid admin type",
            success: false
            });
        }
    });
}

//------------------------- View all Cinema owners -------------------------------



























//------------------------- Add Cinema owners -------------------------------



























//------------------------- Edit Cinema owners -------------------------------

module.exports.editCinemaOwner = function(req, res, next){
    var username = req.body.username;
    var user = 'select * from admins where username = ? AND type = "Cinema Owner"';
    database.query(user, [username], function(err, results, fiels) {
        if(err) return next(err);
        if(results.length > 0){
            var email = req.body.email;
            var salary = req.body.salary;
            var type = req.body.type;
            var phone_number = req.body.phone_number;
            if(!email){
                email = results[0].email;
            }
            if(!salary){
                salary = results[0].salary;
            }
            if(!type){
                type = results[0].type;
            }
            if(!phone_number){
                phone_number = results[0].phone_number;
            }
            var query = 'UPDATE admins SET email = ?, salary = ?, type = ?, phone_number = ? where username = ? AND type = "Cinema Owner"';
            database.query(query, [email, salary, type, phone_number, username], function(err, results, fiels) {
            if(err) return next(err);
            return res.send(results);
            });  
        }      
        else {
            res.status(200).json({
            err: null,
            msg: "wrong username or invalid admin type",
            success: false
            });
        }
    });
}

//------------------------- Delete Cinema owners -------------------------------

module.exports.deleteCinemaOwner = function(req, res, next){
    var username = req.body.username;
    var user = 'select * from admins where username = ? AND type = "Cinema Owner"';
    database.query(user, [username], function(err, results, fiels) {
        if(err) return next(err);
        if(results.length > 0){
            var query = 'DELETE FROM admins_cinemas where admin = ?';
            database.query(query, [username], function(err, results, fiels) {
            if(err) return next(err);
            });
            var query = 'DELETE FROM admins where username = ? AND type = "Cinema Owner"';
            database.query(query, [username], function(err, results, fiels) {
            if(err) return next(err);
            return res.send(results);
            });  
        }      
        else {
            res.status(200).json({
            err: null,
            msg: "wrong username or invalid admin type",
            success: false
            });
        }
    });
}
