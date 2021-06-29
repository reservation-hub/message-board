exports.toJson = (model) => {
  // クライアントに渡すモデルのパスワードを消すためのヘルパー関数
  const obj = model.toObject === undefined ? model : model.toObject()
  delete obj.password
  return obj
}