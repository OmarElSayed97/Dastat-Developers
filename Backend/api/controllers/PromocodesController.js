let database = require('../config/db-connection'),
    Validations = require('../utils/validations');

// Promocodes Controller should be implemented here


/**
 * Retrieves the promocode with its type, value, and in which cinema
 *
 * @param {*} req
 * @param {*} res Contains the property data that consist of the promocode results
 * @param {*} next
 */
module.exports.viewPromocodes = function (req, res, next) {
    database.query('SELECT * FROM promocodes p INNER JOIN promocodes_cinemas c ON p.promocode = c.promocode',
        function (error, results) {
            if (error) return next(error);
            res.status(200).json({
                err: null,
                msg: "All promocodes are retrieved successfully",
                data: results
            });
        });
};

/**
 * Retrieves the promocode with its type and value
 *
 * @param {*} req
 * @param {*} res Contains the property data that consist of the promocode needed
 * @param {*} next
 */
module.exports.getPromocode = function (req, res, next) {
    database.query('SELECT * FROM promocodes p WHERE p.promocode = ?', [req.params.promocode],
        function (error, results) {
            if (error) return next(error);
            res.status(200).json({
                err: null,
                msg: "The promocode is retrieved successfully",
                data: results
            });
        });
};

/**
 * Retrieves the promocodes filtered by certain promocode
 *
 * @param {*} req
 * @param {*} res Contains the property data that consist of the promocodes needed
 * @param {*} next
 */
module.exports.filterPromocode = function (req, res, next) {
    let promocode = '%' + req.params.promocode + '%';
    database.query('SELECT * FROM promocodes p INNER JOIN promocodes_cinemas c ON p.promocode = c.promocode WHERE p.promocode LIKE ?', [promocode],
        function (error, results1) {
            if (error) return next(error);
            database.query('SELECT * FROM promocodes p WHERE p.promocode LIKE ?', [promocode],
                function (error, results2) {
                    if (error) return next(error);
                    res.status(200).json({
                        err: null,
                        msg: "The promocode is retrieved successfully",
                        data: {"promocodes": results2, "promocodesWithCinema": results1}
                    });
                });
        });
};

/**
 * Retrieves the promocode filtered by certain cinema
 *
 * @param {*} req
 * @param {*} res Contains the property data that consist of the promocodes needed
 * @param {*} next
 */
module.exports.filterCinema = function (req, res, next) {
    let promocode = '%' + req.params.cinema + '%';
    database.query('SELECT * FROM promocodes p INNER JOIN promocodes_cinemas c ON p.promocode = c.promocode WHERE c.cinema_name LIKE ?', [promocode],
        function (error, results) {
            if (error) return next(error);
            res.status(200).json({
                err: null,
                msg: "The promocode is retrieved successfully",
                data: results
            });
        });
};


/**
 * A function to handle the assignment of a promocode to a certain cinema
 * by the app owner
 * @param req, required data for processing the request of assigning a promocode to a certain cinema
 * @param res, results of changes on the promocodes_cinemas table in database
 * @param next, next middleware to handle errors
 */
module.exports.assignPromocodeToCinema = function (req, res, next) {
    let promocode = req.body["promocode"],            //storing the value of column promocode in variable promocode
        cinemaName = req.body["cinema_name"],         //storing the value of column cinema_name in variable cinemaName
        cinemaLocation = req.body["cinema_location"]; //storing the value of column cinema_location in variable cinemaLocation
    //Adding same validity checks to make sure user enter data in right format
    if (!Validations.isString(promocode)) {
        return res.status(200).json({
            err: null,
            msg: 'promocode is required.',
            data: null
        });
    }
    if (!Validations.isString(cinemaName)) {
        return res.status(200).json({
            err: null,
            msg: 'Cinema info is required.',
            data: null
        });
    }
    if (!Validations.isString(cinemaLocation)) {
        return res.status(200).json({
            err: null,
            msg: 'Cinema info is required.',
            data: null
        });
    }
    //NULL Checker
    if (!promocode) {
        return res.status(200).json({
            err: null,
            msg: 'promocode is required.',
            data: null
        });
    }
    if (!cinemaLocation) {
        return res.status(200).json({
            err: null,
            msg: 'Cinema info is required.',
            data: null
        });
    }
    if (!cinemaName) {
        return res.status(200).json({
            err: null,
            msg: 'Cinema info is required.',
            data: null
        });
    }
    //this query is to handle if promocode user entered not found in the database
    database.query('SELECT * FROM promocodes WHERE promocode = ?', [promocode], function (error, results) {
        if (error) return next(error);
        if (!results.length) return res.status(200).json({
            err: null,
            msg: 'Promocode you are trying to add not found',
            data: null,
        });
        //this query is to handle if cinema user entered not found in the database
        database.query('SELECT * FROM cinemas WHERE location = ? AND name = ?', [cinemaLocation, cinemaName],
            function (error, results) {
                if (error) return next(error);
                if (!results.length) return res.status(200).json({
                    err: null,
                    msg: 'cinema you are trying to add the promocode to is not found',
                    data: null,
                });
                //this query is to handle if promocode user trying to add is already there
                database.query('SELECT * FROM promocodes_cinemas WHERE promocode = ? AND cinema_name = ? AND cinema_location = ?',
                    [promocode, cinemaName, cinemaLocation], function (error, results) {
                        if (error) return next(error);
                        if (results.length > 0) return res.status(200).json({
                            err: null,
                            msg: 'Promocode already added!',
                            data: null,
                        });
                        //Inserting into promocodes_cinemas table to complete the assignment of promocode to cinema
                        database.query('INSERT INTO promocodes_cinemas (cinema_location,cinema_name,promocode) VALUES(?,?,?)',
                            [cinemaLocation, cinemaName, promocode], function (error, results) {
                                if (error) return next(error); //security check output-ing 404 NOT FOUND if an error occurred
                                return res.status(200).json({ //returning a status 200 OK to acknowledge the user of success-full process
                                    err: null,
                                    msg: 'Promocode had been assigned successfully.',
                                    data: results,
                                });
                            });
                    });
            });
    });

};


/**
 * A function to handle editing a certain promocode by the app owner
 * @param req, required data for processing the request of editing a certain promocode
 * @param res, results of changes on the promocodes table in database
 * @param next, next middleware to handle errors
 */
module.exports.editPromocode = function (req, res, next) {

    let promocode = req.body.promocode,   //storing the value of column promocode in variable promocode
        type = req.body.type,             //storing the type of promocode in variable type
        value = req.body.value;           //storing the value of promocode in variable value

    //Adding somme validity checks to make sure user enter data in right format
    if (!Validations.isString(promocode)) {
        return res.status(422).json({
            err: null,
            msg: 'Provided promocode must be of type String.',
            data: null
        });
    }

    if (!Validations.isString(type)) {
        return res.status(422).json({
            err: null,
            msg: 'Provided promocode type must be of type String.',
            data: null
        });
    }

    if (!Validations.isString(value)) {
        return res.status(422).json({
            err: null,
            msg: 'Provided promocode value must be of type String.',
            data: null
        });
    }
    if (!promocode) {
        return res.status(422).json({
            err: null,
            msg: 'promocode is required.',
            data: null
        });
    }
    if (!type) {
        return res.status(422).json({
            err: null,
            msg: 'Type is required.',
            data: null
        });
    }
    if (!value) {
        return res.status(422).json({
            err: null,
            msg: 'Value is required.',
            data: null
        });
    }

    //Update into promocodes table to complete editing a certain promocode
    database.query('Update promocodes Set type = ?, value = ? where promocode = ?', [type, value, promocode],
        function (error, results) {
            if (error) return next(error); //security check outpu-ting 404 NOT FOUND if an error occurred
            res.status(200).json({ //returning a status 200 OK to acknowledge the user of success-full process
                err: null,
                msg: "Promocode Successfully edited",
                data: results
            });
        });
};

module.exports.addPromocode = function (req, res, next) {
    let promocode = req.body["promocode"],      //storing the value of column promocode in variable promocode
        type = req.body["type"],                //storing the type of promocode in variable type
        value = req.body["value"];              //storing the value of promocode in variable value

    //Validations to check that the user entered the right data format
    if (!Validations.isString(promocode)) {
        return res.status(422).json({
            err: null,
            msg: 'Provided promocode must be of type String.',
            data: null
        });
    }
    if (!Validations.isString(type)) {
        return res.status(422).json({
            err: null,
            msg: 'Provided type must be of type String.',
            data: null
        });
    }
    if (!Validations.isString(value)) {
        return res.status(422).json({
            err: null,
            msg: 'Provided value must be of type String.',
            data: null
        });
    }

    //NULL Checker
    if (!promocode) {
        return res.status(422).json({
            err: null,
            msg: 'Promocode is required.',
            data: null
        });
    }
    if (!type) {
        return res.status(422).json({
            err: null,
            msg: 'Type is required.',
            data: null
        });
    }
    if (!value) {
        return res.status(422).json({
            err: null,
            msg: 'Value is required.',
            data: null
        });
    }

    //Check if the promocode is not added already
    database.query('SELECT * FROM promocodes WHERE promocode = ? AND type = ? AND value = ?', [promocode, type, value],
        function (error, results) {
            if (error) return next(error);
            if (results.length > 0) return res.status(200).json({
                err: null,
                msg: 'Promocode already added!',
                data: null,
            });

            //Inserting into promocodes table
            database.query('INSERT INTO promocodes (promocode,type,value) VALUES(?,?,?)', [promocode, type, value],
                function (error, results) {
                    if (error) return next(error); //security check outpu-ting 404 NOT FOUND if an error occurred
                    return res.status(200).json({ //returning a status 200 OK to acknowledge the user of success-full process
                        err: null,
                        msg: 'Promocode had been added successfully.',
                        data: results,
                    });
                });
        })

};

module.exports.deletePromocode = function (req, res, next) {
    let id = req.params.promocode,                                                  //the promocode id sent in the url params
        deleteFromCinemas = 'DELETE FROM promocodes_cinemas WHERE promocode = ?',   //deleting the promocode from table promocodes_cinemas
        deleteFromPromocode = 'DELETE FROM promocodes WHERE promocode = ?';         //deleting the promocode from table promocodes


    database.query(deleteFromCinemas, [id], function (error) {
        if (error) return next(error);
        database.query(deleteFromPromocode, [id], function (error, results) {
            if (error) return next(error);
            res.status(200).json({
                err: null,
                msg: "Promocode: " + id + ' Was Deleted Successfully',
                data: results
            });
        });
    });

};

//helper method for assignPromocodeToCinema to get all promocodes and cinemas
module.exports.viewPromocodesAndCinemas = function (req, res, next) {
    database.query('SELECT promocode, type, value FROM promocodes', function (error, promocodeResults) {
        if (error) return next(error);

        database.query('SELECT name , location FROM cinemas', function (error, cinemaResults) {
            if (error) return next(error);
            return res.status(200).json({
                err: null,
                msg: "Retrieved Successfully",
                data: {promocodeResults, cinemaResults}
            });
        })
    })
};