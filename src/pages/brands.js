import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const Brands = () => {
  const shoppers = useStaticQuery(graphql`
    query {
      allContentfulBrands {
        edges {
          node {
            brandshero {
              file {
                url
              }
            }

            brandsherotitle
          }
        }
      }
    }
  `)
  return (
    <div>
      <div className="header_div">
        <Header />
      </div>
      <div
        className="shoppers-hero"
        style={{
          backgroundImage: `url(${
            shoppers.allContentfulBrands.edges[0].node.brandshero.file.url +
            "?fm=jpg&fl=progressive"
          })`,
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <h1>{shoppers.allContentfulBrands.edges[0].node.brandsherotitle}</h1>
        <p>{shoppers.allContentfulShoppers.edges[0].node.merchantherotext}</p>
      </div>
    </div>
  )
}

export default Brands
