const { filterUndefined } = require('../../lib/filter')

const errorHandler = (e, res) => {
    console.log(e)
    if (e.kind === "ObjectId") {
        return res.status(400).send({message: 'Invalid Id'})
    }
    return res.status(500).send({message: 'Internal Server Error'})
}

exports.crudController = {
    fetchAll(Model, res) {
        Model.find({}).exec()
        .then(models => {
            if (!models.length) {
                return res.status(404).send({message: 'No post found!'})
            }
            return res.send(models)
        })
        .catch(e => errorHandler(e, res))
    },
    fetch() {

    },
    update(Model, id, whiteList, res) {
        Model.findByIdAndUpdate(id, whiteList, {new: true}).exec()
        .then(model => {
            if (!model) return res.status(404).send({message: 'No post matched'})
            return res.send(model)
        })
        .catch(e => errorHandler(e, res))
    },
    delete(Model, id, res) {
        Model.findOneAndDelete({_id: id}).exec()
        .then(result => {
            if (!result) return res.status(404).send({message: 'No post matched'})
            return res.send({message: 'Successfully deleted'})
        })
        .catch(e => errorHandler(e, res))
    },
    insert(Model, res) {
        Model.save()
        .then(result => res.status(201).send(result))
        .catch(e => errorHandler(e, res))
    }
}
