exports.crudController = {
    fetchAll(req, res, next, { Model }) {
        Model.find({}).exec()
        .then(models => {
            return res.send(models)
        })
        .catch(e => next(e))
    },
    fetch(req, res, next, { Model, id }) {
        Model.findById(id).orFail().exec()
        .then(model => {
            return res.send(model)
        })
        .catch(e => next(e))
    },
    insert(req, res, next, { Model }) {
        Model.save()
        .then(result => res.status(201).send(result))
        .catch(e => next(e))
    },
    update(req, res, next, { Model, id, params }) {
        Model.findByIdAndUpdate(id, params, {new: true, omitUndefined: true, runValidators: true}).orFail().exec()
        .then(model => {
            return res.send(model)
        })
        .catch(e => next(e))
    },
    delete(req, res, next, { Model, id }) {
        Model.findOneAndDelete({_id: id}).orFail().exec()
        .then(result => {
            return res.send({message: 'Successfully deleted'})
        })
        .catch(e => next(e))
    },
}
