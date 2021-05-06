const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    auth: {
        authdb: 'admin'
    },
    useUnifiedTopology: true,
    useFindAndModify: true,
}
const DB_HOST = process.env.DB_HOST

module.exports = {
    dbOptions,
    DB_HOST
}