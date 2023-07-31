import { Suspense } from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Loading from "./loading";
import { GDPRPrompt } from "./local";

// Font
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

// CSS Head
export async function generateMetadata({ params }) {
  return {
    title: "PHYSICAL Fashion Store",
    description:
      "Shop the latest trends Explore our vast collection and find your best outfit. Experience seamless online shopping with PHYSICAL.",
  };
}

//#endregion

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${montserrat.className}`}>
      <body>
        <Suspense fallback={<Loading />}>
          <GDPRPrompt />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
