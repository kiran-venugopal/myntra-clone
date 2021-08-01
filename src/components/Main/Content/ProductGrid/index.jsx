import React, { Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

function Item({ item }) {
  return (
    <Paper>
      <img alt="" src={item.src} />
    </Paper>
  );
}

export default function ProductGrid({
  images = [],
  price,
  mrp,
  discount,
  additionalInfo,
  brand
}) {
  const [isCarouselOpen, setCarouselOpen] = React.useState(false);

  return (
    <div
      className="product-grid"
      onMouseEnter={() => setCarouselOpen(true)}
      onMouseLeave={() => setCarouselOpen(false)}
    >
      {isCarouselOpen ? (
        <Carousel
          autoPlay={true}
          animation="slide"
          timeout={200}
          interval={1500}
          stopAutoPlayOnHover={false}
          navButtonsAlwaysInvisible={true}
          className="carousel"
        >
          {images.slice(1).map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      ) : (
        <Fragment>
          <img alt="" src={images[0].src} />
        </Fragment>
      )}
      <div className="title">{brand}</div>

      <div className="additional">{additionalInfo}</div>

      <div className="price-tag">
        <div className="price">Rs. {price}</div>
        {discount && (
          <Fragment>
            <div className="mrp">Rs. {mrp}</div>
            <div className="discount"> ( Rs. {discount} OFF ) </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
