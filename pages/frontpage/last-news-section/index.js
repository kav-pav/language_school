import { useEffect, useState } from "react";
import Link from "next/link";
import { News, Item } from "./styles";
import { getFbPosts } from "lib/rest-api";

export const NewsSection = () => {
  const [posts, setData] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      const callApi = await getFbPosts();
      setData(callApi.data);
    };
    fetchData();
  }, []);

  return (
    <News.Outter>
      <News.Inner>
        <News.Header>Aktualności</News.Header>
        <News.Container>
          {posts.data.map(k => (
            <NewsItem {...k} />
          ))}
        </News.Container>
      </News.Inner>
    </News.Outter>
  );
};

const NewsItem = data => (
  <Item.Outter>
    <a href={data.link}>
      <Item.Image>
        <img src={data.image} alt="news-image" />
      </Item.Image>
      <Item.Date>{data.date}</Item.Date>
      <Item.Line />
      <Item.Header>{data.title}</Item.Header>
    </a>
  </Item.Outter>
);
