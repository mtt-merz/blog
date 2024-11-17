"use server";

import Parser from "rss-parser";
import { FeedArticle } from "@/models/FeedArticle";

export const getRSSFeed = async (): Promise<Array<FeedArticle>> => {
  const parser = new Parser();
  const feeds = {
    google: "https://news.google.com/rss/search?q=cow",
    rss: "https://rss.app/feeds/mqiHCHfcWG4D36lz.xml",
    nytimes: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    bbc: "http://feeds.bbci.co.uk/news/rss.xml",
  };

  const feed = await parser.parseURL(feeds.google);
  return feed.items.map((item) => ({
    id: item.guid || "",
    title: item.title || "",
    description: item.description || "",
    link: item.link || "",
    pubDate: item.pubDate || "",
    content: item.content || "",
    url: item.link || "",
  }));
};
