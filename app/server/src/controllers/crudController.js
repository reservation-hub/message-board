const { filterUndefined } = require('../../lib/filter')

exports.errorHandler = (e, res) => {
    console.log(e)
    if (e.kind === "ObjectId") {
        return res.status(400).send({message: 'Invalid Id'})
    }
    return res.status(500).send({message: 'Internal Server Error'})
}

exports.crudController = {
    fetchAll(Model, req, res) {
        Model.find({}).exec()
        .then(posts => {
            if (!posts.length) {
                return res.status(404).send({message: 'No post found!'})
            }
            res.send(posts)
        })
        .catch(e => errorHandler(e, res))
    },
    fetch() {

    },
    update() {

    },
    delete() {

    },
    insert() {

    }
}
