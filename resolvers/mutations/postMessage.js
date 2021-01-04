module.exports = async (_, { grape, content }, { models, pubsub }) => {
  //const id = await models.Message.find().length;
  const newMessage = await models.Message.create({
    grape: grape,
    content: content,
  });
  // const messages = await models.Message.find();
  pubsub.publish("MESSAGE_ADDED", { newMessage });
  return newMessage;
};
