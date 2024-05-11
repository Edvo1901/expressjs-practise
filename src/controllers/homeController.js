const connection = require("../config/database");

const getHomePage = (req, res) => {
	return res.render("home.ejs");
};

const getTestPage = (req, res) => {
	res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
	let { email, userName, city } = req.body;
    connection.query("INSERT INTO Users (email, name, city) VALUES (?, ?, ?)", [email, userName, city], function (err, results) {
        if (err) return console.log(">> Error: ", err)
        res.send("Create user succeed")
    })
};

module.exports = {
	getHomePage,
	getTestPage,
	postCreateUser,
};
