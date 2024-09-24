import { Plus } from "lucide-react";
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
      <div className="flex flex-col items-center p-2 ">
        {product ? (
          <>
            <div className="grid grid-cols-3 items-center">
              {/* Gambar Product */}
              <div className="w-fit p-2">
                <figure>
                  <img src={product.thumbnail} alt="Album" />
                </figure>
              </div>

              {/* Description Product */}
              <div className="p-2">
                <p className="font-bold text-3xl">{product.title}</p>
                <small className="link-info hover:link-primary cursor-pointer">Visit the {product.brand} store</small>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="badge badge-accent"> - {product.discountPercentage}% off</span> | <span className="text-xl">{formatPrice(product.price)}</span>
                  </p>
                  <hr />
                  <p className="font-semibold">Description </p>
                  <p className="text-sm">
                    {product.description} <br />
                  </p>

                  {/* Detail Produk */}
                  <p className="font-semibold">Details </p>
                  <div className="text-sm">
                    <h2>Brand : {product.brand}</h2>
                    <h2>Weight : {product.weight} lbs</h2>
                    <h2>Dimensions : </h2>
                    <div>
                      <p>Width : {product.dimensions.width} cm</p>
                      <p>Height : {product.dimensions.height} cm</p>
                      <p>Depth : {product.dimensions.depth} cm</p>
                    </div>
                  </div>

                  {/* Shipping */}
                  <p className="font-semibold">Shipping </p>
                  <div className="text-sm">
                    <p>{product.shippingInformation}</p>
                  </div>

                  {/* Policy */}
                  <p className="font-semibold">Policy </p>
                  <div className="text-sm">
                    <p>Warranty : {product.warrantyInformation}</p>
                    <p>{product.returnPolicy}</p>
                  </div>
                </div>
              </div>

              {/* Cart */}
              <div className="card items-center space-x-1">
                <div className="card-title flex">
                  <h2>Set amount and notes!</h2>
                </div>
                <div className="card-body flex items-end">
                  <h2>Stock : {product.stock} left.</h2>
                </div>
                <div className="card-body">
                  <div className="flex space-x-1">
                    <button className="btn btn-sm btn-primary">Buy</button>
                    <button className="btn btn-sm btn-primary">
                      <Plus /> Add to Cart!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h2>Loading...</h2>
          </div>
        )}

        {/* {product.reviews.map((review) => (
          <>
            <h2 className="text-center">Review</h2>
            <div key={review.id}>
              <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    <h3 className="font-semibold text-xl">{review.reviewerName}</h3> <span className="text-xs">{review.date}</span>
                  </h2>
                  <p className="text-sm">{review.comment}</p>
                  <p>{review.rating} ⭐</p>
                </div>
              </div>
            </div>
          </>
        ))} */}

        <div className="flex-none justify-start mt-4">
          <Link className="btn btn-sm btn-secondary" to={"/category/beauty"}>
            Kembali...
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
