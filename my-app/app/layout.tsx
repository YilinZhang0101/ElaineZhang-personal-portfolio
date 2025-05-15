import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

// for typescript, these two names should be different
const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

// label name for the website
export const metadata = {
  title: "Elaine Zhang's Portfolio",
  description: "Personal Portfolio",
};

// any content that is nested within the <RootLayout> component when it’s used
// will be passed into this component as the children property.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* children: nested content of a component */}
      {/* In the root layout component, "{children}" indicates that all page content is inserted into the "<body>" tag. */}
      <body
        className={`${outfit.className} ${ovo.className}
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}