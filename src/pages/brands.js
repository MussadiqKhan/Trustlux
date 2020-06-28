import React from "react"
import "../styles/shoppers.css"
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
        <h1 style={{ maxWidth: "700px" }}>
          {shoppers.allContentfulBrands.edges[0].node.brandsherotitle}
        </h1>
      </div>

      <div className="coming-soon">
        <h1>Coming Soon</h1>
      </div>

      <Footer />
    </div>
  )
}

export default Brands
