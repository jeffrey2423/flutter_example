CREATE TABLE USERS(
    ts_creation TIMESTAMP NOT NULL DEFAULT NOW()::TIMESTAMP,
    row_id SERIAL NOT NULL,
    firstName TEXT NOT NULL,
    lastname TEXT NOT NULL,
    avatar TEXT NOT NULL,
    CONSTRAINT USERS_PK
        PRIMARY KEY (row_id)
);
