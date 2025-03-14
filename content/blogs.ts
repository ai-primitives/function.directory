import { AI } from 'functions.do'

export const blogs = AI({
  const ai = AI({

  // Create a New Blog from scratch    
  createBlog: async ({ ai, args}) => {
    const blogTopics = await ai.listBlogTopics(args)
    const { niche, audience, keywords, topics } = blogTopics
    const titles = await Promise.all(topics.map(topic => ai.listBlogTitles({ background: args, niche, audience, topic })))
    const posts = await Promise.all(titles.map(title => ai.writeBlogPost({ background: args, niche, audience, title })))
    return { posts, titles, topics }
  }

  // List Blog Topics - Generate potential blog topics
  listBlogTopics: {
    niche: 'target niche or industry',
    audience: 'target audience description',
    keywords: ['relevant keywords'],
    topics: ['list of potential blog topics']
  },
  
  // List Blog Titles - Generate engaging titles for a specific topic
  listBlogTitles: {
    topic: 'main topic of the blog post',
    audience: 'target audience description',
    titles: ['list of potential blog titles']
  },
  
  // Write Blog Post - Create a complete blog post
  writeBlogPost: {
    title: 'title of the blog post',
    audience: 'target audience description',
    content: 'complete blog post content'
  },
  
  // Edit Blog Post - Make improvements to a blog post
  editBlogPost: {
    title: 'title of the blog post',
    content: 'updated blog post content',
    changes: ['list of changes made']
  },

})
