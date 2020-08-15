import { useStaticQuery, graphql } from "gatsby"

const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetaData
