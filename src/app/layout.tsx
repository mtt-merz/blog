import "@/theme/globals.css";
import { PropsWithChildren } from "react";
import styles from "./layout.module.css";
import { cookies } from "next/headers";
import { getThemeFromCookies } from "@/utils/theme";

export const metadata = {
  title: "mukkey",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const theme = getThemeFromCookies(await cookies());

  return (
    <html lang="en">
      <body data-theme={theme} className={styles.container}>
        <div>{children}</div>
      </body>
    </html>
  );
}
