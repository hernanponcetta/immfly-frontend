import { rest } from "msw";

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/1/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        abilities: [
          {
            ability: {
              name: "overgrow",
            },
          },
          {
            ability: {
              name: "chlorophyll",
            },
          },
        ],
        height: 7,
        id: 1,
        name: "bulbasaur",
        types: [
          {
            type: {
              name: "grass",
            },
          },
          {
            type: {
              name: "poison",
            },
          },
        ],
      })
    );
  }),

  rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 1118,
        next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
        previous: null,
        results: [
          {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/",
          },
          {
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon/2/",
          },
        ],
      })
    );
  }),
];
