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