module.exports = async (_, {}, {models}) => {
  return await models.Message.find();
}