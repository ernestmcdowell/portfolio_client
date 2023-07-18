import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import BlogFooter from "../components/blog_footer";
import api from "../api/api";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "tailwindcss/tailwind.css";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const posts = await api.fetchPosts();
        console.log("Post:", posts); // log the result to inspect its structure
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchProjectsData();
  }, []);

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <div className="hero  h-[800px] bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="images/me.jpg"
              className="max-w-sm mask mask-hexagon rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Hi, I'm Beau!</h1>
              <p className="py-6 text-xl ">
                I'm a software developer in Kansas City. I create custom
                websites and software. I also write about programming, hardware,
                and life. I also enjoy hiking, fishing, and taking photos of my
                adventures!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="content-center items-center">
        <div className="grid grid-cols-1  gap-8 p-10 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-neutral shadow-lg rounded-lg overflow-hidden"
            >
              <Link href={`/post_details/?slug=${post.slug}/`}>
                <img src={post.image} className="w-full h-50 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  {/* <p>{post.content.slice(0, 100)}...</p> */}
                  {/* <ReactMarkdown className="prose prose-sm m-auto" remarkPlugins={[remarkGfm, remarkHtml]} children={post.content.slice(0,100)}></ReactMarkdown> */}
                  {/* Display other project details as needed */}
                </div>
                <div className="card-actions justify-end px-4">
                  {post.technology
                    ? post.technology.map((tech) => (
                        <div key={tech} className="badge badge-outline">
                          {tech}
                        </div>
                      ))
                    : null}
                </div>
                <div className="text-center py-2"></div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <BlogFooter></BlogFooter>
      </section>
    </div>
  );
};

export default IndexPage;
