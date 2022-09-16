import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ProductItems from "../../components/productsFolder/products.json";

import { StarIcon } from "@heroicons/react/20/solid";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetail = () => {
  // useParams helps in getting id from the url
  const params = useParams();

  const data = ProductItems.filter((product) => product.id == params?.id);
  console.log(data);

  const [description, setDescription] = useState(true);
  const handleDescription = () => {
    setDescription(!description);
  };

  const [review, setReview] = useState(false);
  const handleReview = () => {
    setReview(!review);
  };

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () =>
    counter > 0 ? setCounter(counter - 1) : setCounter(0);

  return (
    <div className="container mx-auto mt-10 px-5 product-detail-page">
      <div className="column-one-container">
        <div
          onClick={() => {
            handleDescription();
          }}
          className={
            description
              ? "product-description-title"
              : "default-description-title"
          }
        >
          <div>Description</div>
          {description ? <div> - </div> : <div> + </div>}
        </div>
        {description && (
          <div className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            sagittis ac elementum mattis elit magna ultricies phasellus. At
            pulvinar in a, vitae at pharetra felis. Lorem aenean nunc mi elit
            sed egestas consectetur. Ultricies velit, in eu venenatis elit
            turpis id tristique.
          </div>
        )}

        <div
          onClick={() => {
            handleReview();
          }}
          className={
            review ? "product-description-title" : "default-description-title"
          }
        >
          <div>Reviews</div>
          {review ? <div> - </div> : <div> + </div>}
        </div>
        {review && (
          <div className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            sagittis ac elementum mattis elit magna ultricies phasellus. At
            pulvinar in a, vitae at pharetra felis. Lorem aenean nunc mi elit
            sed egestas consectetur. Ultricies velit, in eu venenatis elit
            turpis id tristique.
          </div>
        )}
      </div>

      <div className="column-two-container">
        <div className="product-image-container">
          <img
            src={data[0].imageSrc}
            alt={data[0].imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75 "
          />
        </div>
      </div>

      <div className="column-three-container">
        <div className="product-name-wrapper">
          <div>{data[0].name}</div>
          <div>&#9825;</div>
        </div>

        <div>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  reviews.average > rating ? "text-gold" : "text-lightGrey",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <div className="product-price">{data[0].price}</div>

        <div className="product-counter-wrapper">
          <div
            onClick={() => {
              decrementCounter();
            }}
            className="product-counter"
          >
            -
          </div>
          <div>{counter}</div>
          <div
            onClick={() => {
              incrementCounter();
            }}
            className="product-counter"
          >
            +
          </div>
        </div>

        <button>Buy now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
