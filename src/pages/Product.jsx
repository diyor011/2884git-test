import React, { useEffect, useState } from 'react'

const Product = () => {
  const [products, setProducts] = useState([])
 
 const getData = async () => {
    const req = await fetch('https://dummyjson.com/products')
    const res = await req.json()
    setProducts(res.products)

  }

  useEffect(() => {
    getData()
  }, [])

 


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Mahsulotlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(item => (
          <div key={item.id} className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
            <figure className="px-4 pt-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base line-clamp-1">{item.title}</h2>
              <p className="text-sm text-base-content/60 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="badge badge-outline">{item.category}</span>
                <span className="text-warning text-sm">⭐ {item.rating}</span>
              </div>
              <div className="card-actions justify-between items-center mt-2">
                <span className="text-lg font-bold text-primary">${item.price}</span>
                <button className="btn btn-primary btn-sm">Sotib olish</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product