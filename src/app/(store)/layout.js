import { Header, StorePagesRoot } from "./local";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";

export function ImageContainer({ classes, src, alt }) {
  return (
    <div className={`${classes}`}>
      <div className="absolute-container">
        <Image
          className="bgimage"
          src={src}
          alt={alt}
          placeholder="empty"
          fill
        />
      </div>
    </div>
  );
}

export function HorizontalScroller({ children }) {
  return (
    <div className={`grid ${styles.scroller}`}>
      <div className={`grid ${styles.itemsgrid} ${styles.itemsgridhorizontal}`}>
        {children}
      </div>
    </div>
  );
}

export function StoreSection({ title, children }) {
  return (
    <section>
      <div className={styles.sectiontitlebar}>
        <h2 className="font-title">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function StoreItem({ href, img, imgAlt, name, brand, price }) {
  return (
    <Link className="" href={href}>
      <div className={styles.storeitem}>
        <ImageContainer
          classes={`${styles.storeitemimagecontainer}`}
          src={img}
          alt={imgAlt}
        />
        <div className={`font-text ${styles.storeitemtextcontainer}`}>
          <p>
            <strong className="font-text-bold">{brand}</strong>
            <br />
            {name}
          </p>
          <p>
            <strong className="font-text-bold">{price}</strong>
          </p>
        </div>
      </div>
    </Link>
  );
}

export function Highlights({ children }) {
  return <div className={`${styles.highlights}`}>{children}</div>;
}

export function ItemsGrid({ extraClass, children }) {
  return (
    <div className={`grid ${styles.itemsgrid} ${styles.itemsgridtwoaxes}`}>
      {children}
    </div>
  );
}

export function HighlightItem({ img, imgAlt, title, description }) {
  return (
    <div className={`${styles.highlight}`}>
      <ImageContainer
        classes={`${styles.highlightimagecontainer}`}
        src={img}
        alt={imgAlt}
      />
      <div className={styles.highlighttextcontainer}>
        <h3>
          <Link className="font-title" href="">
            {title}
          </Link>
        </h3>
        <p className="font-description">{description}</p>
      </div>
    </div>
  );
}

export default function SectionLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <div className="footer-about">
          <h3>PHYSICAL</h3>
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="footer-customer">
          <h3>Customer Service</h3>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>Orders and Delivery</li>
            <li>Returns and Refunds</li>
            <li>Methods of Payment</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="footer-policies">
          <p>
            <strong>Privacy Policy</strong>
          </p>
          <p>
            <strong>Terms and Conditions</strong>
          </p>
          <p>
            <strong>Accessibility</strong>
          </p>
          <p>
            <strong>Sitemap</strong>
          </p>
        </div>
        <div className="footer-author">
          <p>Website design and code © 2023 Nuno Freitas</p>
          <p>
            Images modified from external sources under the terms of their
            respective licenses.
            <Link href="attributions">
              Click here for list of attributions.
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
