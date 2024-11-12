import styles from "./Header.module.css";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import Link from "next/link";
import { cookies } from "next/headers";
import { getThemeFromCookies } from "@/utils/theme";
import Image from "next/image";

export default async function Header() {
  const theme = getThemeFromCookies(await cookies());

  return (
    <header className={styles.header}>
      <Link href="/home">
        <Image src={"/logo.png"} alt="logo" height={60} width={176} />
      </Link>

      <ToggleThemeButton initialTheme={theme} />
    </header>
  );
}
