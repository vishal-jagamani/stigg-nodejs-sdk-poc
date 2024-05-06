const dotenv = require('dotenv');
dotenv?.config();

module.exports = {
    Stigg_Config: {
        Server_API_Key: process?.env?.STIGG_SERVER_API_KEY,
    },
};
