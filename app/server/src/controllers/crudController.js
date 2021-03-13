const { models } = require("mongoose")

class CrudController {
    constructor(model) {
        this.model = model
    }

    index(req, res) {
        this.model.find({}).exec()
        .then(models => {
            if (!models.length) {
                return res.status(404).send({message: 'error'})
            }
            res.send(models)
        })
        .catch(e => res.status(500).send(e))
    } 

    show(req, res) {
        const { id } = req.params
        this.model.findById(id).exec()
        .then(model => {
            if (!model.length) {
                return res.status(404).send({message: 'err'})
            }
            res.send(model)
        })
        .catch(e => res.status(500).send(e))
    }

    insert(req, res) {
        const { title, name, message } = req.body
        const model = new this.model({title, name, message})
        post.save()
        .then(result => res.status(201).send(result))
        .catch(e => res.status(500).send(e))
    }
}