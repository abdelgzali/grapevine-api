module.exports = async (_,{id},{models}) => {
  const deleteGrape = await models.Grape.deleteOne({_id: id});
}