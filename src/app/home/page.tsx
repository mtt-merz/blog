import Image from "next/image";
import cowImage from "@public/images/cow.png";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Image src={cowImage} alt="Cow" width={500} />
      </main>
    </>
  );
}
