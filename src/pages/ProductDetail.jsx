import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  const apiurl = "https://dummyjson.com/products/" + productId;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [apiurl]);

  return (
    <>
      <div className="p-4 flex flex-col h-screen justify-center items-center space-y-4 ">
        {product ? (
          <>
            <div className="card md:card-side bg-base-300 shadow-md max-w-3xl">
              <figure className="w-fit">
                <img src={product.thumbnail} alt="Album" />
              </figure>
              <div className="card-body space-y-1">
                <h2 className="card-title text-3xl">{product.title}</h2>
                <small className="link-info hover:link-primary cursor-pointer">Visit the {product.brand} store</small>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="badge badge-accent">- {product.discountPercentage}% off</span> | {formatPrice(product.price)}
                  </p>
                  <p className="text-xs">
                    {product.description} <br />
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <ShoppingCart /> Add to Cart!
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h2>Loading...</h2>
          </div>
        )}
        {/* <div>
          {product.reviews.map((review) => (
            <>
              <h2>{review.rating}</h2>
            </>
          ))}
        </div> */}

        <div className="flex-none justify-start">
          <Link className="btn btn-sm btn-secondary" to={"/"}>
            Kembali...
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
