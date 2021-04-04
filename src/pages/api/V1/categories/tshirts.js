const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
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

module.exports = allowCors(handler)
