const connection = require("../config/database");

const getAllUsers = async () => {
	const [results, fields] = await connection.query("SELECT * FROM Users");
	return results;
};

const getUserById = async (userId) => {
	const [results, fields] = await connection.query(
		"SELECT * FROM Users WHERE id=?",
		[userId]
	);
	const user = results && results.length > 0 ? results[0] : {};
	return user;
};

const updateUserById = async (updateUserData) => {
	const { userId, email, userName, city } = updateUserData;
	const [results, field] = await connection.query(
		"UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?",
		[email, userName, city, userId]
	);
};

const deleteUserById = async (userData) => {
	const { userId } = userData;
	const [results, fields] = await connection.query(
		"DELETE FROM Users WHERE id = ?",
		[userId]
	);
};

module.exports = {
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById
};
