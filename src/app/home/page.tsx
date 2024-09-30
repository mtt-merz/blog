import Image from "next/image";
import cowImage from "@public/images/cow.png";
import styles from "./page.module.css";
export default function HomePage() {
  return (
    <main className={styles.main}>
      <Image src={cowImage} alt="Cow" width={500} />

      <h1>MUKKEY</h1>
    </main>
  );
}
