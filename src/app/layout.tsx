import { PropsWithChildren } from "react";
import "./globals.css";
import styles from "./layout.module.css";
import Image from "next/image";
import topIllustration from "@public/illustrations/top.svg";
import bottomIllustration from "@public/illustrations/bottom.svg";

export const metadata = {
  title: "mmmukkey",
  description: "The best website ever",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className={styles.illustration}>
          <Image src={topIllustration} alt="top illustration" />
        </div>

        {children}

        <div className={styles.illustration}>
          <Image src={bottomIllustration} alt="bottom illustration" />
        </div>
      </body>
    </html>
  );
}
