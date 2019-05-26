const coffeeDrinks = [
  {
    name: "French Press"
  }
];

const resolvers = {
  Query: {
    coffeeDrinks: () => coffeeDrinks
  }
};

module.exports = { resolvers };
