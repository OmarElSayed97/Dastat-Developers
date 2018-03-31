var database = require('../config/db-connection');

//Movie Controllers should be implemented here
//DONT FORGET TO USE MODULE exports
//DONT FORGET TO ADD IT IN THE ROUTES


//-------------VIEW RATINGS-----------------
//--View Movies by High ratings

module.exports.getMoviesHighRatings = function(req,res,next){

    database.query('SELECT * from movies ORDER BY rating desc',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Movies found to view their ratings!");
    }
    else{
        return res.send(results);
    }
});
}

//--View Movies by Low ratings

module.exports.getMoviesLowRatings = function(req,res,next){

    database.query('SELECT * from movies ORDER BY rating asc',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Movies found to view their ratings!");
    }
    else{
        return res.send(results);
    }
});
}





//-----------VIEW BY DATE -------------------

//--View Movies ordered by the latest

module.exports.getMoviesLastestDate = function(req,res,next){

    database.query('Select * FROM movies ORDER BY year desc',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Movies found to view their dates");
    }
    else{
        return res.send(results);
    }
});
}

//--View Movies ordered by the Oldest

module.exports.getMoviesOldesttDate = function(req,res,next){

    database.query('Select * FROM movies ORDER BY year asc',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Movies found to view their dates");
    }
    else{
        return res.send(results);
    }
});
}

//------------------------VIEW BY GENRE-------------------

//--View Sci-fi Movies
module.exports.getMoviesSciFi = function(req,res,next){

    database.query('Select * FROM movies where genre="Sci-fi" ORDER BY year desc ',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Sci-fi Movies found");
    }
    else{
        return res.send(results);
    }
});
}

//--View Thriller Movies
module.exports.getMoviesThriller = function(req,res,next){

    database.query('Select * FROM movies where genre="Thriller" ORDER BY year desc ',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Thriller Movies found");
    }
    else{
        return res.send(results);
    }
});
}

//--View Drama Movies
module.exports.getMoviesDrama = function(req,res,next){

    database.query('Select * FROM movies where genre="Drama" ORDER BY year desc ',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Drama Movies found");
    }
    else{
        return res.send(results);
    }
});
}

//--View Adventure Movies
module.exports.getMoviesAdventure = function(req,res,next){

    database.query('Select * FROM movies where genre="Adventure" ORDER BY year desc ',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Adventure Movies found");
    }
    else{
        return res.send(results);
    }
});
}

//--View Horror Movies
module.exports.getMoviesHorror = function(req,res,next){

    database.query('Select * FROM movies where genre="Horror" ORDER BY year desc ',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Horror Movies found");
    }
    else{
        return res.send(results);
    }
});
}
//--View Action Movies
module.exports.getMoviesAction = function(req,res,next){

    database.query('Select * FROM movies where genre="Action" ORDER BY year desc ',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Action Movies found");
    }
    else{
        return res.send(results);
    }
});
}
//--View Comedy Movies
module.exports.getMoviesComedy = function(req,res,next){

    database.query('Select * FROM movies where genre="Comedy" ORDER BY year desc ',
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Comedy Movies found");
    }
    else{
        return res.send(results);
    }
});
}