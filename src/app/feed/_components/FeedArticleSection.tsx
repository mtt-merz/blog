import { FeedArticle } from "@/models/FeedArticle";
import styles from "../page.module.css";

export function FeedArticleSection({
  id,
  title,
  content,
  url,
  image,
}: FeedArticle) {
  return (
    <a href={url} target="_blank" className={styles.a}>
      <section className={styles.section}>
        <h1>{title}</h1>
        <p>{content}</p>
        <img src={image} alt="ALT" />
        <p>Read more...</p>
      </section>
    </a>
  );
}
