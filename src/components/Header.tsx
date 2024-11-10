import styles from "./Header.module.css";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import Link from "next/link";
import { cookies } from "next/headers";
import { getThemeFromCookies } from "@/utils/theme";

export default async function Header() {
  const theme = getThemeFromCookies(await cookies());

  return (
    <header className={styles.header}>
      <Link href="/home">
        <h1>MUKKEY</h1>
      </Link>

      <ToggleThemeButton initialTheme={theme} />
    </header>
  );
}
