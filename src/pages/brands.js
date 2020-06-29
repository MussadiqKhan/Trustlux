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
        class="hero-sec hero-brands"
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
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="hero-content d-flex justify-content-center text-center">
                <div class="hero-content-inner maxw-800">
                  <h1 class="hero-title" style={{ maxWidth: "700px" }}>
                    {shoppers.allContentfulBrands.edges[0].node.brandsherotitle}
                  </h1>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gallery-area section-padding">
        <div class="heading-title text-center mb-60">
          <h2>Coming soon</h2>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Brands
