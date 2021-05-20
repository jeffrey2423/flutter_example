const app = require('./app');
const config = require('./config/config');

const {ConnectBD} = require('./database')

const main = async () => {
    await ConnectBD();
    await app.listen(config.SERVER_PORT);
    console.log('server on port 4000')
}

main();