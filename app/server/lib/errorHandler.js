exports.errorHandler = (err, req, res, next) => {
  if (err.name === "CastError") {
    return res.status(400).send({message: 'Error: Invalid input'})
  }
  if (err.name === "DocumentNotFoundError") {
    return res.status(404).send({message: 'Error: Not Found'})
  }
  return res.status(500).send({message: 'Internal Server Error'})
}