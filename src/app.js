const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

module.exports = {
  createApp: function createApp() {
    return {
      resolvers,
      typeDefs
    };
  }
};
