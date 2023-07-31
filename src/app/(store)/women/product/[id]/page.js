import {
  HorizontalScroller,
  ImageContainer,
  StoreSection,
  StoreItem,
} from "@/app/(store)/layout";
import { newIn, allItems } from "@/server/women";
import styles from "./page.module.css";
import { montserrat } from "@/app/layout";

function SizeButton({ children }) {
  return (
    <button
      className={`button ${montserrat.className} font-text-bold ${montserrat.className}`}
    ></button>
  );
}

export default function Page({ params }) {
  let productData = allItems.find((x) => x.id === Number(params.id));
  return (
    <>
      <section className={`${styles.productcontainer}`}>
        <div className={`${styles.product}`}>
          <ImageContainer
            classes={`${styles.imagecontainer}`}
            src={productData.img}
            alt={productData.imgAlt}
          />
          <div className={`${styles.textcontainer}`}>
            <div className={`${styles.sizebuttoncontainer}`}>
              <p>Women</p>
              <h3 className="font-title">{productData.product}</h3>
              <p className={`font-description`}>{productData.brand}</p>
            </div>
            <div className={`${styles.buttoncontainer}`}>
              <p className="font-description">
                <strong>{productData.price}</strong>
              </p>
            </div>
            <div>
              <p>
                <strong>Available Sizes</strong>
              </p>
              <div
                className={`${styles.buttoncontainer} ${styles.sizebuttoncontainer}`}
              >
                <button
                  className={`button ${montserrat.className} font-text-bold ${montserrat.className}`}
                >
                  S
                </button>
                <button
                  className={`button font-text-bold ${montserrat.className}`}
                >
                  M<br />
                  <span className="font-alert">2 Left</span>
                </button>
                <button
                  className={`button font-text-bold ${montserrat.className}`}
                >
                  L
                </button>
                <button
                  className={`button font-text-bold ${montserrat.className}`}
                >
                  XL
                </button>
                <button
                  className={`button font-text-bold ${montserrat.className}`}
                >
                  XXL
                  <br />
                  <span className="font-alert">1 Left</span>
                </button>
              </div>
            </div>
            <div
              className={`${styles.buttoncontainer} ${styles.buybuttoncontainer}`}
            >
              <button
                className={`button font-text-bold ${montserrat.className}`}
              >
                Add to Bag
              </button>
              <button
                className={`button font-text-bold ${montserrat.className}`}
              >
                Wishlist
              </button>
            </div>
            <div>
              <p>
                <strong>Estimated Delivery</strong>
              </p>
              <p>Sep 2 - Sep 20</p>
            </div>
            <div>
              <div className={`textsection`}>
                <h3 className="font-title">DETAILS</h3>
              </div>
              <p>{productData.description}</p>
              <br />
              <p>
                <strong>Composition</strong>
              </p>
              <ul className="list">
                <li>Outside: Polyester 100%</li>
                <li>Inside: Leather 100%</li>
              </ul>
              <p>
                <strong>Instructions</strong>
              </p>
              <ul>
                <li>Dry Clean Only</li>
              </ul>
              <p>
                <strong>Product Numbers</strong>
              </p>
              <ul>
                <li>00000141972 ({productData.brand} Catalogue Number)</li>
                <li>{productData.id} (PHYSICAL Product ID)</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.textcontainer} ${styles.textleft}`}>
            <div>
              <div className={`textsection`}>
                <h3 className="font-title">SHIPPING</h3>
              </div>
              <p>
                <strong>Available Services</strong>
              </p>
              <ul>
                <li>
                  <strong>Free Delivery</strong>
                  <ul>
                    <li>Check list of applicable regions</li>
                  </ul>
                </li>
                <li>
                  <strong>24-Hour Express Delivery</strong>
                  <ul>
                    <li>3 EUR fee</li>
                    <li>Check list of applicable regions</li>
                  </ul>
                </li>
                <li>
                  <strong>Free Returns</strong>
                  <ul>
                    <li>Within 14 days of receiving the item</li>
                    <li>Limited to a maximum of 3 size-related returns</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>Estimated Delivery</strong>
              </p>
              <p>Sep 2 - Sep 20</p>
            </div>
          </div>
        </div>
      </section>
      <StoreSection title="MORE RECOMMENDATIONS">
        <HorizontalScroller>
          {newIn.map((item) => (
            <StoreItem
              key={item.id}
              href={String(item.id)}
              id={item.id}
              img={item.img}
              imgAlt={item.imgAlt}
              name={item.product}
              brand={item.brand}
              price={item.price}
            />
          ))}
        </HorizontalScroller>
      </StoreSection>
    </>
  );
}
