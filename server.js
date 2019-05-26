const { ApolloServer } = require("apollo-server");
const { createApp } = require("./src/app");

const server = new ApolloServer(createApp());

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
