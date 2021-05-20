module.exports = {
    SERVER_PORT: 4000,
    application: {
        cors: {
            server: [
                {
                    origin: "*", //servidor que deseas "localhost:3000" que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }

    },
    DB_CREDENTIALS:{
        HEROKU:{
            user: "",
            host: "",
            database: "",
            password: "",
            port:  5432,
            ssl: { rejectUnauthorized: false },
        },
        LOCALHOST:{
            user: "postgres",
            host: "localhost",
            database: "flutter_example",
            password: "root",
            port:  5432
        },
        URI: ""      
    }
}