import { getRSSFeed } from "@/actions/getRSSFeed";
import { FeedArticleSection } from "@/app/feed/_components/FeedArticleSection";

/*
 * TODO:
 *  create a page showing news
 * it should have a bento layout
 * main page big, small little
 * take inspiration from google photos
 *
 *
 * */

export default async function FeedPage() {
  const articles = await getRSSFeed();

  return articles.map((item) => <FeedArticleSection key={item.id} {...item} />);
}
