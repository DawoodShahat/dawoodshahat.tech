import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import formatDate from "../utils/formatDate"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <div className="container">
      <header className="blog-post__header">
        <h1 className="blog-post__title">{post.frontmatter.title}</h1>
        <small>posted on {formatDate(post.frontmatter.date)}</small>
      </header>
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  </Layout>
)

export default PostTemplate
