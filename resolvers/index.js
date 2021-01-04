const mutations = require("./mutations");
const queries = require("./queries");

const MESSAGE_ADDED = "MESSAGE_ADDED";

const subscriptions = {
  newMessage: {
    // Additional event labels can be passed to asyncIterator creation
    subscribe: async (parent, args, { pubsub }) => {
      return pubsub.asyncIterator([MESSAGE_ADDED]);
    },
  },
};

module.exports = {
  Subscription: {
    ...subscriptions,
  },
  Mutation: {
    ...mutations,
  },
  Query: {
    ...queries,
  },
};
