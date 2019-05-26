const { ApolloServer } = require("apollo-server-lambda");
const { createApp } = require("./src/app");

const server = new ApolloServer(createApp());

exports.graphqlHandler = server.createHandler();
