import { PropsWithChildren, ReactNode } from "react";
import styles from "./skeleton.module.css";

type Props = PropsWithChildren & {
  header: ReactNode;
};

export const Skeleton: React.FC<Props> = ({ header, children }) => {
  return (
    <div className={styles.page}>
      <header>
        <a>{header}</a>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
};
