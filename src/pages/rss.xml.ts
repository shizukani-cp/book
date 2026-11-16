import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

function to_date(val) {
  let s = String(val);
  return new Date(`${s.substring(0, 4)}-${s.substring(4, 6)}-${s.substring(6, 8)}`);
}

export async function GET(context: APIContext) {
  const posts = await getCollection('books');

  const items = posts.map((post) => ({
    title: post.data.title,
    description: `${post.data.started}-${post.data.finished ? post.data.finished : ""}`,
    link: `/book/articles/${post.id}/`,
    pubDate: post.data.started,
  })).sort((a, b) => to_date(b.pubDate).getTime() - to_date(a.pubDate).getTime());

  return rss({
    title: '静カニの読書記録',
    description: '静カニの読書記録のRSS',
    site: context.site ?? 'https://shizukani-cp.github.io/blog',
    items: items,
  });
}

