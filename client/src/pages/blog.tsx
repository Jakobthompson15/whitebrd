import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Calendar, Clock, Search, ArrowRight, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Digital Marketing in 2025",
    excerpt: "Explore the latest trends and strategies that are shaping the digital marketing landscape this year.",
    content: "Full content here...",
    author: "Sarah Johnson",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Digital Marketing", "Strategy", "Trends"]
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt: "Learn the best practices for creating web applications that can grow with your business needs.",
    content: "Full content here...",
    author: "Mike Chen",
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    tags: ["Web Development", "Architecture", "Best Practices"]
  },
  {
    id: 3,
    title: "The Power of Brand Storytelling",
    excerpt: "Discover how compelling narratives can transform your brand and connect with your audience.",
    content: "Full content here...",
    author: "Emily Rodriguez",
    date: "January 5, 2025",
    readTime: "6 min read",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    tags: ["Branding", "Storytelling", "Marketing"]
  },
  {
    id: 4,
    title: "AI and Machine Learning in Business",
    excerpt: "Understanding how artificial intelligence is revolutionizing business operations and decision-making.",
    content: "Full content here...",
    author: "David Park",
    date: "December 28, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    tags: ["AI", "Machine Learning", "Innovation"]
  },
  {
    id: 5,
    title: "Creating Engaging User Experiences",
    excerpt: "Tips and techniques for designing interfaces that users love and want to interact with.",
    content: "Full content here...",
    author: "Lisa Thompson",
    date: "December 20, 2024",
    readTime: "5 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["UX Design", "User Interface", "Design Thinking"]
  },
  {
    id: 6,
    title: "Remote Work Best Practices",
    excerpt: "Maximize productivity and maintain work-life balance in the era of distributed teams.",
    content: "Full content here...",
    author: "John Williams",
    date: "December 15, 2024",
    readTime: "4 min read",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800&q=80",
    tags: ["Remote Work", "Productivity", "Team Management"]
  }
];

const categories = ["All", "Marketing", "Development", "Branding", "Technology", "Design", "Productivity"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button
              variant="ghost"
              onClick={() => setSelectedPost(null)}
              className="mb-8"
            >
              ← Back to Blog
            </Button>
            
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
            
            <Badge className="mb-4">{selectedPost.category}</Badge>
            
            <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{selectedPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">{selectedPost.excerpt}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Insights</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <ul>
                <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
                <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
                <li>Consectetur, adipisci velit, sed quia non numquam eius modi</li>
              </ul>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            </div>
            
            <div className="flex gap-2 mt-8">
              {selectedPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
        </article>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, stories, and updates from the Whitebrd team
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}