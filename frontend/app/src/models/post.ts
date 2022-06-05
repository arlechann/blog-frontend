import { parse } from "date-fns";

export type APIPost = {
  slug: string,
  title: string,
  content: string,
  created_at: string,
  last_updated_at: string,
};

export type Post = {
  slug: string,
  title: string,
  content: string,
  createdDate: Date,
  lastUpdatedDate: Date,
};

export const mapAPIPost = (apiPost: APIPost): Post => ({
  slug: apiPost.slug,
  title: apiPost.title,
  content: apiPost.content,
  createdDate: parse(apiPost.created_at, 'yyyy-MM-dd HH:mm:ss XXXX', Date.now()),
  lastUpdatedDate: parse(apiPost.last_updated_at, 'yyyy-MM-dd HH:mm:ss XXXX', Date.now()),
});

export const summarize = (str: string): string => {
  const max = 15;
  return str.split('\n', max).join('');
};