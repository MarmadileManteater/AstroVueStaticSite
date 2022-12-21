import rss from '@astrojs/rss'
import { getAllBlogPostIds, getBlogPostById } from '../../dataservice/blog-posts'
import sanitizeHtml from 'sanitize-html'

export const get = () => rss({
  title: 'Emma\'s Blog!',
  description: 'my blog; 🤷‍♀️i guess',
  site: `${import.meta.env.SITE}blog/`,
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
  customData: `<language>en-us</language>`,
})
