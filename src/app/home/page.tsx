import styles from "./page.module.css";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <header>
          <h1>Mukkey</h1>
          <p>Learn, Share, and Grow Together with a Smile</p>
        </header>

        <section>
          <h2>Overview</h2>
          <p>
            Mukkey is a friendly, educational website that invites users to
            learn, share knowledge, and engage in community-driven activities.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>
              Community-Driven Learning: Share expertise and learn
              collaboratively.
            </li>
            <li>
              Categories and Topics: Organized knowledge for easy navigation.
            </li>
            <li>
              Personalized Feeds: Curated content based on user interests.
            </li>
            <li>
              Engagement and Recognition: Comments, reactions, badges, and
              points.
            </li>
            <li>
              Clean and Friendly Design: Gentle colors and rounded elements for
              a friendly feel.
            </li>
          </ul>

          <h2>Target Audience</h2>
          <p>
            Mukkey is designed for learners, hobbyists, students, and
            professionals looking for a laid-back platform to explore new ideas
            and share expertise.
          </p>
        </section>

        <footer>
          <p>
            &copy; 2023 Mukkey. Learn, Share, and Grow Together with a Smile.
          </p>
        </footer>
      </main>
    </>
  );
}
