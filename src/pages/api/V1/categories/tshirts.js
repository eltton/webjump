export default (req, res) => {
  res.status(200).json({
    filters: [
      {
        color: 'Cor'
      }
    ],
    items: [
      {
        id: 1,
        sku: 'sku-1',
        path: 'camiseta-preta',
        name: 'Camiseta Preta',
        image: 'media/shirt-1.jpg',
        price: 59.9,
        filter: [
          {
            color: 'Preta'
          }
        ]
      },
      {
        id: 2,
        sku: 'sku-2',
        path: 'camiseta-laranja',
        name: 'Camiseta Laranja',
        image: 'media/shirt-2.jpg',
        price: 40.5,
        filter: [
          {
            color: 'Laranja'
          }
        ]
      },
      {
        id: 3,
        sku: 'sku-3',
        path: 'camiseta-amarela',
        name: 'Camiseta Amarela',
        image: 'media/shirt-3.jpg',
        price: 61.49,
        filter: [
          {
            color: 'Amarela'
          }
        ]
      },
      {
        id: 4,
        sku: 'sku-4',
        path: 'camiseta-rosa',
        name: 'Camiseta Rosa',
        image: 'media/shirt-4.jpg',
        price: 52.0,
        filter: [
          {
            color: 'Rosa'
          }
        ]
      }
    ]
  })
}
