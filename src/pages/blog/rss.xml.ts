import rss from '@astrojs/rss'
import { getAllBlogPostIds, getBlogPostById } from '@marmadilemanteater/gh-static-site-lib/src/dataservice/blog-posts'
// @ts-ignore
import sanitizeHtml from 'sanitize-html'

export const get = () => rss({
  title: 'Emma\'s Blog!',
  description: 'my blog; 🤷‍♀️i guess',
  site: `${import.meta.env.SITE}blog/`,
  // @ts-ignore
  items: getAllBlogPostIds().map((postId) => {
    const { title, shortDescription, gittime, html } = getBlogPostById(postId)
    return {
      link: `${postId}`,
      title: title,
      pubDate: gittime,
      description: shortDescription,
      content: sanitizeHtml(html)
    }
  }),
  customData: '<language>en-us</language>',
})
