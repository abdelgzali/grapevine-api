module.exports = async (_, {}, {models}) => {
  return await models.Grape.find();
}