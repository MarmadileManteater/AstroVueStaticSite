import rss from '@astrojs/rss'
import { getAllBlogPostIds, getBlogPostById } from '../../dataservice/blog-posts'
import sanitizeHtml from 'sanitize-html'

export const get = () => rss({
  title: 'Emma\'s Blog!',
  description: 'my blog; 🤷‍♀️i guess',
  site: `${import.meta.env.SITE}/blog/`,
  items: getAllBlogPostIds().map((postId) => {
    const { title, shortDescription, gittime, html } = getBlogPostById(postId)
    return {
      link: `${postId}`,
      title: title,
      pubDate: new Date(gittime).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'GMT' }),
      description: shortDescription,
      content: sanitizeHtml(html)
    }
  }),
  customData: `<language>en-us</language>`,
})
