import { ImageContainer, StoreSection } from "../layout";
import styles from "./page.module.css";
import { newIn } from "@/server/women";

function BagItem({ img, imgAlt, product, brand, price }) {
  return (
    <div className={`${styles.itemcontainer}`}>
      <ImageContainer
        classes={`${styles.imagecontainer}`}
        src={img}
        alt={imgAlt}
      />
      <div>
        <p>Women</p>
        <h3 className="font-title">{product}</h3>
        <p className={`font-description`}>{brand}</p>
      </div>
      <div>
        <h3 className="font-title">{price}</h3>
        <p className={`font-description`}>VAT Included</p>
      </div>
      <div className={`${styles.sizequantity}`}>
        <p>
          <strong>Size</strong>
        </p>
        <p className={`font-description`}>XL</p>
        <br />
        <p>
          <strong>Quantity</strong>
        </p>
        <p className={`font-description`}>1</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <StoreSection title="SHOPPING BAG">
      <div className={`grid ${styles.container}`}>
        {newIn.map((item) => (
          <BagItem
            key={item.id}
            img={item.img}
            imgAlt={item.imgAlt}
            product={item.product}
            brand={item.brand}
            price={item.price}
          />
        ))}
        <div className={`${styles.gridtop}`}>
          <div className="textsection">
            <h3 className="font-title">SUMMARY</h3>
          </div>
          <div className={`grid ${styles.summarycontainer}`}>
            <p>
              <strong>Subtotal</strong>
            </p>
            <p>1200 EUR</p>
            <p>
              <strong>Delivery</strong>
            </p>
            <p>10 EUR</p>
            <p>
              <strong>Sale</strong>
            </p>
            <p>0 EUR</p>
            <p>
              <strong>Promotions</strong>
            </p>
            <p>0 EUR</p>
            <p className={`grid ${styles.total}`}>
              <strong>TOTAL</strong>
            </p>
            <p className={`grid ${styles.total}`}>0 EUR</p>
          </div>
        </div>
      </div>
    </StoreSection>
  );
}
