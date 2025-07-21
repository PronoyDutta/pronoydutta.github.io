export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'research' | 'blog' | 'project' | 'thoughts';
  tags: string[];
  readTime: string;
  published: boolean;
}

// Sample stories - replace with your actual content
export const stories: Story[] = [
  {
    id: "neural-architecture-search-journey",
    title: "My Journey into Neural Architecture Search",
    excerpt: "How I discovered the fascinating world of automated neural network design and what it taught me about the future of AI.",
    content: `
// # My Journey into Neural Architecture Search

// When I first encountered Neural Architecture Search (NAS) during my PhD, I had no idea it would become such a central part of my research career. What started as curiosity about automated machine learning has evolved into a passion for making AI more accessible and efficient.

// ## The Problem That Started It All

// Back in 2016, designing neural networks was still very much an art. Researchers would spend weeks tweaking architectures, adjusting layer depths, and experimenting with different connection patterns. I remember spending countless nights in the lab, running experiments and wondering: "There has to be a better way."

// ## The Breakthrough Moment

// The breakthrough came when I realized that the search for optimal architectures could itself be automated. Instead of manually designing networks, we could use algorithms to explore the vast space of possible architectures systematically.

// ## Key Insights

// Through my research, I've learned several key insights:

// 1. **Efficiency Matters**: The most elegant solution isn't always the most practical one
// 2. **Constraints Drive Innovation**: Working with limited computational resources often leads to the most creative solutions
// 3. **Collaboration is Key**: The best research happens when diverse perspectives come together

// ## Looking Forward

// As I continue this research, I'm excited about the potential for NAS to democratize AI development, making it possible for researchers with limited resources to create state-of-the-art models.

// *This work was supported by grants from the National Science Foundation and industry partnerships.*
    `,
    date: "2024-03-15",
    category: "research",
    tags: ["Neural Architecture Search", "Machine Learning", "AI Research", "PhD Journey"],
    readTime: "8 min read",
    published: true
  },
  {
    id: "building-scalable-ml-systems",
    title: "Building Scalable ML Systems: Lessons from Production",
    excerpt: "Real-world insights from deploying machine learning models at scale, including the challenges nobody talks about.",
    content: `
# Building Scalable ML Systems: Lessons from Production

Moving from research prototypes to production ML systems taught me more about engineering than any textbook ever could. Here are the hard-won lessons from deploying models that serve millions of users.

## The Reality Check

Your beautiful research model that achieves 99% accuracy on test data? It might struggle to maintain 85% in production. Here's why and what to do about it.

## Infrastructure Challenges

- **Data Pipeline Reliability**: Your model is only as good as your data pipeline
- **Model Versioning**: How do you roll back when things go wrong?
- **Monitoring and Alerting**: Detecting model drift before it impacts users

## Performance Optimization

Real-world constraints forced us to rethink everything:
- Latency requirements under 100ms
- Memory constraints on edge devices
- Battery life considerations for mobile deployment

## The Human Factor

The most important lesson: technology is only part of the solution. Building trust with stakeholders, educating users, and maintaining ethical standards are equally crucial.

*Coming soon: A detailed technical deep-dive into our deployment architecture.*
    `,
    date: "2024-02-28",
    category: "blog",
    tags: ["MLOps", "Production ML", "Scalability", "Engineering"],
    readTime: "12 min read",
    published: false
  },
  {
    id: "future-of-ai-development",
    title: "The Future of AI Development: A Personal Perspective",
    excerpt: "Reflections on where AI is heading and what it means for developers, researchers, and society.",
    content: `
# The Future of AI Development: A Personal Perspective

*Draft - Coming Soon*

As someone who has witnessed the rapid evolution of AI over the past decade, I have some thoughts on where we're heading...

## Key Trends I'm Watching

1. **Democratization of AI Tools**
2. **Edge Computing Revolution**
3. **Ethical AI Frameworks**
4. **Human-AI Collaboration**

*This post is currently in draft. Check back soon for the full article.*
    `,
    date: "2024-04-01",
    category: "thoughts",
    tags: ["AI Future", "Technology Trends", "Innovation"],
    readTime: "15 min read",
    published: false
  }
];

export const categories = [
  { id: 'all', name: 'All Stories', color: 'bg-gray-100 text-gray-800' },
  { id: 'research', name: 'Research', color: 'bg-blue-100 text-blue-800' },
  { id: 'blog', name: 'Blog', color: 'bg-green-100 text-green-800' },
  { id: 'project', name: 'Projects', color: 'bg-purple-100 text-purple-800' },
  { id: 'thoughts', name: 'Thoughts', color: 'bg-orange-100 text-orange-800' }
];
