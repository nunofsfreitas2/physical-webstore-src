"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { items } from "@/server/home";

export function GDPRPrompt() {
  const promptMainClass = "userdatasaverask";
  const promptInClass = "animation-fadein";
  const promptOutClass = "animation-fadeout";
  const [promptClasses, setClasses] = useState(
    promptMainClass + " " + promptInClass
  );
  const [isClosed, setClose] = useState(false);

  const close = () => {
    if (!isClosed) {
      setClose(true);
      setClasses(promptMainClass + " " + promptOutClass);
    }
  };

  return (
    <div className={promptClasses}>
      <p>We use cookies to tailor the experience to your needs</p>
      <button onClick={close} className={`button`}>
        Accept All
      </button>
      <button onClick={close} className={`button`}>
        Customize Preferences
      </button>
    </div>
  );
}

export function Logo({ className }) {
  return (
    <Link href="/">
      <svg className={`${className} svg-button`} viewBox="0 0 383.83 51.55">
        <path d="M36.47,3.46c-3.43-1.54-7.5-2.3-12.2-2.3H0V51.55H16.99v-12.38h7.27c4.7,0,8.77-.78,12.2-2.34,3.43-1.56,6.08-3.76,7.96-6.59,1.87-2.83,2.81-6.19,2.81-10.08s-.94-7.26-2.81-10.12c-1.87-2.86-4.52-5.05-7.96-6.59Zm-8.06,21.02c-1.13,1.06-2.87,1.58-5.22,1.58h-6.19V14.26h6.19c2.35,0,4.09,.53,5.22,1.58,1.13,1.06,1.69,2.5,1.69,4.32s-.56,3.26-1.69,4.32Z" />
        <polygon points="85.46 19.01 69.77 19.01 69.77 1.15 52.78 1.15 52.78 51.55 69.77 51.55 69.77 32.98 85.46 32.98 85.46 51.55 102.46 51.55 102.46 1.15 85.46 1.15 85.46 19.01" />
        <polygon points="159.62 1.15 143.21 1.15 132.83 18.61 122.54 1.15 104.61 1.15 123.62 33.07 123.62 51.55 140.61 51.55 140.61 33.27 159.62 1.15" />
        <path d="M197.46,24.77c-1.66-1.1-3.47-1.99-5.44-2.66-1.97-.67-3.95-1.2-5.94-1.58-1.99-.38-3.82-.74-5.47-1.08-1.66-.34-2.99-.76-4-1.26-1.01-.5-1.51-1.19-1.51-2.05,0-.58,.2-1.1,.61-1.58,.41-.48,1.09-.86,2.05-1.15,.96-.29,2.26-.43,3.89-.43,2.21,0,4.48,.31,6.8,.94,2.33,.62,4.74,1.56,7.24,2.81l5.11-12.31c-2.64-1.49-5.62-2.59-8.93-3.31-3.31-.72-6.67-1.08-10.08-1.08-5.18,0-9.52,.77-13,2.3-3.48,1.54-6.1,3.59-7.85,6.16-1.75,2.57-2.63,5.41-2.63,8.53,0,2.69,.5,4.93,1.51,6.73,1.01,1.8,2.34,3.25,4,4.36,1.66,1.1,3.48,1.99,5.47,2.66,1.99,.67,3.97,1.21,5.94,1.62,1.97,.41,3.78,.79,5.44,1.15,1.66,.36,2.99,.8,4,1.33,1.01,.53,1.51,1.25,1.51,2.16,0,.58-.22,1.07-.65,1.48-.43,.41-1.12,.72-2.05,.94-.94,.22-2.22,.32-3.85,.32-2.78,0-5.65-.42-8.6-1.26-2.95-.84-5.63-1.96-8.03-3.35l-5.47,12.38c2.54,1.54,5.78,2.78,9.72,3.74,3.94,.96,8.02,1.44,12.24,1.44,5.23,0,9.58-.78,13.03-2.34,3.46-1.56,6.06-3.62,7.81-6.19,1.75-2.57,2.63-5.39,2.63-8.46,0-2.64-.5-4.85-1.51-6.62-1.01-1.78-2.34-3.22-4-4.32Z" />
        <rect x="208.01" y="1.15" width="16.99" height="50.4" />
        <path d="M271.15,33.05c-1.49,1.87-3.13,3.32-4.93,4.36-1.8,1.03-3.83,1.55-6.08,1.55-1.78,0-3.38-.29-4.82-.86-1.44-.58-2.68-1.42-3.71-2.52-1.03-1.1-1.84-2.44-2.41-4-.58-1.56-.86-3.3-.86-5.22s.29-3.66,.86-5.22c.58-1.56,1.38-2.89,2.41-4,1.03-1.1,2.27-1.94,3.71-2.52s3.05-.86,4.82-.86c2.26,0,4.28,.52,6.08,1.55,1.8,1.03,3.44,2.48,4.93,4.36l10.73-9.58c-2.5-3.26-5.65-5.76-9.47-7.49s-8.2-2.59-13.14-2.59c-4.03,0-7.76,.64-11.2,1.91-3.43,1.27-6.41,3.08-8.93,5.44-2.52,2.35-4.48,5.14-5.87,8.35-1.39,3.22-2.09,6.77-2.09,10.66s.7,7.44,2.09,10.66c1.39,3.22,3.35,6,5.87,8.35,2.52,2.35,5.5,4.16,8.93,5.44,3.43,1.27,7.16,1.91,11.2,1.91,4.94,0,9.32-.88,13.14-2.63s6.97-4.24,9.47-7.45l-10.73-9.58Z" />
        <path d="M302.61,1.15l-22.03,50.4h17.28l3.38-8.78h19.17l3.38,8.78h17.57L319.32,1.15h-16.7Zm3.33,29.38l4.88-12.69,4.88,12.69h-9.76Z" />
        <polygon points="361.08 38.38 361.08 1.15 344.08 1.15 344.08 51.55 383.83 51.55 383.83 38.38 361.08 38.38" />
      </svg>
    </Link>
  );
}

function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 999.44 999.44">
      <polygon points="824.93 701.54 123.4 0 0 0 0 123.39 701.54 824.93 0 824.93 0 999.44 999.44 999.44 999.44 0 824.93 0 824.93 701.54" />
    </svg>
  );
}

function Dot({ faded = false }) {
  if (faded)
    return (
      <svg className={`${styles.dot} ${styles.dotfaded}`} viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="300" />
      </svg>
    );
  else
    return (
      <svg className={`${styles.dot}`} viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="300" />
      </svg>
    );
}

function HomeItem({ number, background, bgAlt, bgPos = "", title, route }) {
  const extraStyles = {
    objectPosition: { bgPos },
  };
  let dots = [];

  for (let i = 1; i < 4; i++) {
    if (i == number) dots.push(<Dot />);
    else dots.push(<Dot faded />);
  }

  let itemContent = (
    <div className={`relative-container`}>
      <div className="absolute-container">
        <Image
          className={`bgimage`}
          src={background}
          alt={bgAlt}
          style={{ objectPosition: bgPos }}
          fill
        />
      </div>
      <div className={`relative-container ${styles.dotcontainer}`}>{dots}</div>
      <div
        className={`absolute-container text-container ${styles.headerspace}`}
      >
        <h2>
          <Link className={`${styles.homelink}`} href={route}>
            {title}
            <Arrow />
          </Link>
        </h2>
      </div>
    </div>
  );

  return (
    <div className={`grid-item ${styles.homepageitem}`}>{itemContent}</div>
  );
}

export function HomepageLayout({}) {
  return (
    <div className={`grid ${styles.homepagecontainer}`}>
      {items.map((item) => (
        <HomeItem
          key={item.key}
          number={item.key}
          background={item.background}
          bgAlt={item.bgAlt}
          bgPos={item.bgPos}
          title={item.title}
          route={item.route}
        />
      ))}
    </div>
  );
}
