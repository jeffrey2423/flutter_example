const { Router } = require('express');

const { connection } = require('../database');
const faker = require('faker');

const router = Router();

router.get('/api/users', async (req, res) => {
    try {
        let query = {
            text: `SELECT * FROM USERS`
        };
        await connection.connect(async (err, client, done) => {
            try {
                if (err) {
                    res.status(400).json(err.message);
                } else {
                    await client.query(query, async (err, results) => {
                        if (err) {
                            res.status(400).json(err.message);
                        } else {

                            res.status(200).json({ users: results.rows });

                        }
                    });
                }
            } finally {
                done();
                query = {};
            }
        });

    } catch (error) {
        res.status(400).json(err.message);
    }
});


router.get('/api/users/create', async (req, res) => {
    try {
        await connection.connect(async (err, client, done) => {
            try {
                if (err) {
                    res.status(400).json(err.message);
                } else {
                    for (let i = 0; i < 5; i++) {

                        let query = {
                            text: `INSERT INTO USERS(firstName, lastname, avatar) VALUES($1,$2,$3)`,
                            values: [faker.name.firstName(), faker.name.lastName(), faker.image.avatar()]
                        };

                        await client.query(query, async (err, results) => {
                            if (err) {
                                throw new Error(err.message);
                            }
                        });
                    }
                    res.status(200).json({ message: "5 Usuarios creados" });
                }
            } finally {
                done();
                ind_error = false;
                message_error = "";
            }
        });

    } catch (error) {
        res.status(400).json(err.message);
    }
});

module.exports = router;