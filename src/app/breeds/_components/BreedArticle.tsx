"use client";

import styles from "@/app/breeds/page.module.css";
import { Breed } from "@/models/Breed";
import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";

export function BreedArticle(breed: Breed) {
  return (
    <article className={styles.article}>
      <Image src={breed.image} alt={breed.name} fill sizes={"20rem"} />

      <div>
        <a href={breed.wiki_link} target="_blank">
          <p>Read more</p>
          <RiExternalLinkLine />
        </a>

        <h1>{breed.name}</h1>
        <p>{breed.description}</p>
      </div>
    </article>
  );
}
