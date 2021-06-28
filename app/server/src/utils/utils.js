exports.toJson = (model) => {
  // クライアントに渡すモデルのパスワードを消すためのヘルパー関数
  const obj = model.toObject() || model
  delete obj.password
  return obj
}