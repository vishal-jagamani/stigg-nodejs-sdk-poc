((stiggService) => {
    const Stigg = require('@stigg/node-server-sdk');
    const { Stigg_Config } = require('../config/config');

    const stiggClient = Stigg.initialize({ apiKey: Stigg_Config?.Server_API_Key });

    stiggService.getProducts = async () => {
        try {
            // Further code to add customer in stigg
            // const options = {};
            // const customer = stiggClient.createCustomer(options);
        } catch (err) {
            console.log('Error in stiggService.getProducts service', err);
            return { status: false, message: 'Error in service' };
        }
    };
})(module.exports);
