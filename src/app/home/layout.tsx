import { PropsWithChildren } from "react";
import styles from "./layout.module.css";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <main> {children}</main>
    </div>
  );
}
