"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "../local";

//#region Icons

function BagIcon({ href = "" }) {
  return (
    <Link className="svg-icon" href={href}>
      <svg viewBox="0 0 600 600">
        <path d="M502.06,244h-7.36V28.67h0c0-15.83-12.84-28.67-28.67-28.67H136.67c-15.83,0-28.67,12.84-28.67,28.67h0V244h-10.07C43.85,244,0,287.85,0,341.94v258.06H600V341.94c0-54.09-43.85-97.94-97.94-97.94ZM186.64,57.34h229.42V244H186.64V57.34Z" />
      </svg>
    </Link>
  );
}

function UserIcon({ href = "" }) {
  return (
    <Link className="svg-icon" href={href}>
      <svg viewBox="0 0 600 600">
        <path d="M600,447.82l-23.55-18.29c-65.71-51.02-123.56-77.96-155.75-80.19,45.56-35.8,74.82-91.39,74.82-153.82C495.52,87.54,407.98,0,300,0S104.48,87.54,104.48,195.52c0,62.43,29.26,118.03,74.82,153.82-32.19,2.23-90.04,29.17-155.75,80.19L0,447.82v152.18H600v-152.18h0Z" />
      </svg>
    </Link>
  );
}

function Plus({ onClick = () => {} }) {
  return (
    <svg
      onClick={onClick}
      className="plus svg-button"
      viewBox="0 0 1000.77 1000.77"
    >
      <polygon points="1000.77 380.94 620.6 380.94 620.6 0 380.94 0 380.94 380.94 0 380.94 0 620.6 380.94 620.6 380.94 1000.77 620.6 1000.77 620.6 620.6 1000.77 620.6 1000.77 380.94" />
    </svg>
  );
}

function Brightness({ onClick = () => {} }) {
  return (
    <svg
      onClick={onClick}
      className="brightness svg-button"
      viewBox="0 0 484.44 600"
    >
      <path d="M143.85,0C92.44,0,43.7,10.05,0,28.02,140.63,62.93,243.18,171.48,243.18,300S140.63,537.07,0,571.98c43.7,17.96,92.44,28.02,143.85,28.02,188.1,0,340.59-134.31,340.59-300S331.95,0,143.85,0Z" />
    </svg>
  );
}

//#endregion

//#region Header Elements

function Nav() {
  return (
    <nav className="header-links">
      <NavLink href="/women" name="Women" />
      <NavLink href="/men" name="Men" />
      <NavLink href="/accessories" name="Accessories" />
    </nav>
  );
}

function NavLink({ spanClass = "", href, name }) {
  if (spanClass == "") {
    return (
      <Link className="font-nav" href={href}>
        {name}
      </Link>
    );
  } else {
    return (
      <Link className="font-nav" href={href}>
        <span className={spanClass}>{name}</span>
      </Link>
    );
  }
}

//#region Search Functionality

function SearchBar({ selected, inputChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      className={`searchbar`}
      onFocus={selected}
      onBlur={selected}
      onChange={inputChange}
    />
  );
}

//#endregion

function HeaderButtons() {
  const [theme, setTheme] = useState(0);
  const changeTheme = () => {
    if (theme == 0) setTheme(1); // Set to dark if light
    else if (theme == 1) setTheme(0); // Set back to light
  };

  useEffect(() => {
    if (theme == 0) {
      document.documentElement.setAttribute("data-theme", "light");
    }
    if (theme == 1) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  });

  return (
    <div className="header-buttons">
      <BagIcon href="/shoppingbag" />
      <UserIcon href="/login" />
      <Brightness onClick={changeTheme} />
    </div>
  );
}

//#endregion

export function Header({ logoClass = "", children }) {
  const headerMoreMainClass = "header-more-container";
  const headerMoreInClass = "animation-fadein";
  const headerMoreOutClass = "animation-fadeout";

  const [headerMoreClasses, setClasses] = useState(headerMoreMainClass);
  const [isOpen, setOpen] = useState(false);
  const changeOpen = () => {
    if (isOpen) {
      setOpen(false);
      setClasses(headerMoreMainClass + " " + headerMoreOutClass);
    } else {
      setOpen(true);
      setClasses(headerMoreMainClass + " " + headerMoreInClass);
    }
  };

  const [isSearchSelected, setSearchSelect] = useState(false);
  const [searchResultsComponent, setResultsComponent] = useState(<></>);

  const openSearchResults = () => {
    if (isSearchSelected) {
      setSearchSelect(false);
      setResultsComponent(<SearchResults extraClass="animation-fadeout" />);
    } else {
      setSearchSelect(true);
      setResultsComponent(<SearchResults extraClass="animation-fadein" />);
    }
  };

  useEffect(() => {
    if (isSearchSelected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  return (
    <>
      <header className={`header ${logoClass}`}>
        <Logo className="logo" />
        <Plus onClick={changeOpen} />
        <Nav />
        <HeaderButtons />
        <SearchBar selected={openSearchResults} />
        {children}
      </header>
      <HeaderMore classNames={`${headerMoreClasses}`}>
        <SearchBar selected={openSearchResults} />
        {searchResultsComponent}
        <Nav />
      </HeaderMore>
      {searchResultsComponent}
    </>
  );
}

function HeaderMore({ children, classNames }) {
  return (
    <div className={classNames}>
      <div className="header-more">{children}</div>
    </div>
  );
}

export function SearchResults({ extraClass = "" }) {
  return (
    <div className={`search-results ${extraClass}`}>
      <div>
        <h3>Search Results</h3>
        <br />
        <div className="textsection">
          <h3 className="font-title">WOMEN</h3>
        </div>
        <ul>
          <li>Search Result</li>
        </ul>
        <div className="textsection">
          <h3 className="font-title">MEN</h3>
        </div>
        <ul>
          <li>Search Result</li>
        </ul>
        <div className="textsection">
          <h3 className="font-title">ACCESSORIES</h3>
        </div>
        <ul>
          <li>Search Result</li>
        </ul>
      </div>
    </div>
  );
}
