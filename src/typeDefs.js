const { gql } = require("apollo-server");

const typeDefs = gql`
  type CoffeeDrink {
    name: String
  }

  type Query {
    coffeeDrinks: [CoffeeDrink]
  }
`;

module.exports = {
  typeDefs
};
