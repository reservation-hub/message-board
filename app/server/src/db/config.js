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
    useFindAndModify: false,
}
const DB_HOST = process.env.DB_HOST

module.exports = {
    dbOptions,
    DB_HOST
}