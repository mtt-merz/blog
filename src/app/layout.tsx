import "@/theme/globals.css";
import { PropsWithChildren } from "react";
import { cookies } from "next/headers";
import { getThemeFromCookies } from "@/utils/theme";
import App from "@/components/App";

export const metadata = {
  title: "mukkey",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const theme = getThemeFromCookies(await cookies());

  return (
    <html lang="en">
      <body data-theme={theme}>
        <App>{children}</App>
      </body>
    </html>
  );
}
