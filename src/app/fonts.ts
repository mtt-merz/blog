import { Gluten, Poppins } from "next/font/google";

export const gluten = Gluten({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gluten",
});

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
