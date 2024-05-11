const getHomePage = (req, res) => {
	return res.render("home.ejs")
};

const getTestPage = (req, res) => {
    res.render("sample.ejs");
}

module.exports = {
    getHomePage,
    getTestPage
}
