import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/navbar";
import BlogFooter from "../components/blog_footer";
import {ReactMarkdown}  from "react-markdown/lib/react-markdown";
import "tailwindcss/tailwind.css";
import remarkGfm from "remark-gfm";
import remarkHtml from 'remark-html';

const PostDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const post = await api.fetchPostInfo(slug);
        setPost(post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
      fetchPostData();
  }, [slug]);

  

  return (
    <div className="min-h-screen flex flex-col">
      <section>
        <Navbar />
      </section>
      <section className="content-center flex-grow ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <img src={post.image} className="w-full h-full object-cover mb-8" />
          <ReactMarkdown className="prose prose-sm m-auto" remarkPlugins={[remarkGfm, remarkHtml]} children={post.content}></ReactMarkdown>
          {/* Display other post details as needed */}
        </div>
      </section>
      <footer >
        <BlogFooter />
      </footer>
    </div>
  );
};

export default PostDetailPage;
