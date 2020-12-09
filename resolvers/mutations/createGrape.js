module.exports = async (_,{input}, {models}) => {
  console.log(models)
  const newGrape = await models.Grape.create(input);
  return newGrape;
}