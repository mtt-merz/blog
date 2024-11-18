import { Breed } from "@/models/Breed";
import styles from "./page.module.css";

export default async function BreedsPage() {
  const data = await import("@public/data/breeds.json");
  const breeds = data.default satisfies Array<Breed>;

  return (
    <div className={styles.grid}>
      {breeds.map((breed) => (
        <article key={breed.name} className={styles.article}>
          <img src={breed.image} alt={breed.name} />

          <div>
            <h1>{breed.name}</h1>
            <p>{breed.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
