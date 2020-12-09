module.exports = async (_,{grape, content}, {models}) => {
  //const id = await models.Message.find().length;
  const newMessage = await models.Message.create({
    grape: grape,
    content: content
  });
  return newMessage;
}