import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div id="products">
      {error && <p>Error: {error.message}</p>}
      {products.map(item => (
        <div className="item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h1>{item.title}</h1>
          <h1>{item.price}</h1>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
