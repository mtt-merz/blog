import { Breed } from "@/models/Breed";
import styles from "./page.module.css";
import { BreedArticle } from "@/app/breeds/_components/BreedArticle";

export default async function BreedsPage() {
  const data = await import("@public/data/breeds.json");
  const breeds = data.default satisfies Array<Breed>;

  return (
    <div className={styles.grid}>
      {breeds.map((breed) => (
        <BreedArticle key={breed.name} {...breed} />
      ))}
    </div>
  );
}
