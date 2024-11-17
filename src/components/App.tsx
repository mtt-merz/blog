import { PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import { getThemeFromCookies } from "@/utils/theme";
import { cookies } from "next/headers";
import styles from "./App.module.css";

export default async function App({ children }: PropsWithChildren) {
  const theme = getThemeFromCookies(await cookies());

  return (
    <div className={styles.container}>
      <div>
        <header>
          <Link href="/home">
            <Image src={"/logo.png"} alt="logo" height={60} width={176} />
          </Link>

          <ToggleThemeButton initialTheme={theme} />
        </header>
      </div>

      <div>
        <main>{children}</main>
      </div>

      <div>
        <footer>
          <p>
            &copy; 2023 Mukkey. Learn, Share, and Grow Together with a Smile.
          </p>
        </footer>
      </div>
    </div>
  );
}