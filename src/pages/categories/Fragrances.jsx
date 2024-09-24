import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Fragrances = () => {
  const [products, setProducts] = useState([]);
  const apiurl = "https://dummyjson.com/products/category/fragrances/";

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id}>
            <Link to={"/category/fragrances/" + product.id}>
              <div className="card bg-slate-800  p-2">
                <figure className="px-10 pt-10">
                  <img src={product.thumbnail} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body gap-2 ">
                  <div className="">
                    <h2 className="card-title font-bold line-clamp-1 hover:text-red-500">{product.title}</h2>
                    <div className="space-x-1">
                      <small className="text-xs">{formatPrice(product.price)}</small>
                      <span className="badge badge-xs badge-success ">{product.discountPercentage}% Off</span>
                    </div>
                  </div>

                  {/* <p className="line-clamp-2">{product.description}</p> */}
                  <small className="text-xs">
                    ⭐ {product.rating} | {product.stock} left in stocks.
                  </small>
                  <div className="card-actions justify-end ">
                    {product.tags.map((tag) => (
                      <>
                        <div className="badge badge-outline badge-xs">{tag}</div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fragrances;
