import React from "react"
import usePosts from "../hooks/use-posts"
import BlogPostPreview from "../components/BlogPostPreview"

export default function Blog() {
  const posts = usePosts()
  return (
    <div className="container blog">
      {posts.map(post => (
        <BlogPostPreview post={post} />
      ))}
    </div>
  )
}
