const dotenv = require("dotenv")

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    connection_string : process.env.CONNECTION_STRING
};