export default (req, res) => {
  res.status(200).json({
    items: [
      {
        id: 1,
        name: "Camisetas",
        path: "camisetas",
      },
      {
        id: 2,
        name: "Calças",
        path: "calcas",
      },
      {
        id: 3,
        name: "Calçados",
        path: "calcados",
      },
    ],
  });
};
