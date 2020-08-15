import React from "react"
import { Link } from "gatsby"
import formatDate from "../utils/formatDate"

const BlogPostPreview = ({ post }) => {
  return (
    <article className="blog-post">
      <header>
        <h2 className="blog-post__title">{post.title}</h2>
        <small>posted on {formatDate(post.date)}</small>
      </header>
      <Link className="blog-post__link" to={post.slug}>
        read
      </Link>
    </article>
  )
}

export default BlogPostPreview
