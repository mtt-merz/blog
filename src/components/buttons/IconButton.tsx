import { HTMLAttributes } from "react";
import styles from "./IconButton.module.css";

type Props = HTMLAttributes<HTMLButtonElement>;

export function IconButton(props: Props) {
  return <button className={styles.iconButton} {...props} />;
}
