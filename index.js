const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models, pubsub },
  cors: {
    origin: "*",
    credentials: true,
  },
});

const MONGODB_URI =
  "mongodb+srv://admin:admin@cluster0.uah1y.mongodb.net/grape-vine?retryWrites=true&w=majority";

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);

  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongoDB"))
    .catch((err) => console.log(err));
});
