import React from "react"
import Layout from "../components/Layout"
import usePosts from "../hooks/use-posts"
import BlogPostPreview from "../components/BlogPostPreview"

export default function Blog() {
  const posts = usePosts()
  return (
    <Layout>
      <div className="container blog">
        {posts.map(post => (
          <BlogPostPreview post={post} />
        ))}
      </div>
    </Layout>
  )
}
