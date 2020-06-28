import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/shoppers.css"
import Header from "../components/header"
import Footer from "../components/footer"

const Merchants = () => {
  const shoppers = useStaticQuery(graphql`
    query {
      allContentfulShoppers {
        edges {
          node {
            merchanthero {
              file {
                url
              }
            }

            benefitsimage1 {
              file {
                url
              }
            }
            benefitsimage2 {
              file {
                url
              }
            }
            benefitsimage3 {
              file {
                url
              }
            }
            merhantimage1 {
              file {
                url
              }
            }
            merchantimage2 {
              file {
                url
              }
            }

            merchantherotitle
            merchantherotext
            benefitstitle
            benefitstitle1
            benefitstitle2
            benefitstitle3
            merchanttitle
            merchanttitle1
            merchantext1
            merchanttitle2
            merchanttext2
            joinprogramtitle
            joinprogramtext
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
            shoppers.allContentfulShoppers.edges[0].node.merchanthero.file.url +
            "?fm=jpg&fl=progressive"
          })`,
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <h1>
          {shoppers.allContentfulShoppers.edges[0].node.merchantherotitle}
        </h1>
        <p>{shoppers.allContentfulShoppers.edges[0].node.merchantherotext}</p>
      </div>
      <div className="benefits">
        <h2>{shoppers.allContentfulShoppers.edges[0].node.benefitstitle}</h2>
        <div className="parent">
          <div className="card">
            <img
              src={
                shoppers.allContentfulShoppers.edges[0].node.benefitsimage2.file
                  .url
              }
            />
            <div className="texts">
              <p>
                {shoppers.allContentfulShoppers.edges[0].node.benefitstitle1}
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={
                shoppers.allContentfulShoppers.edges[0].node.benefitsimage3.file
                  .url
              }
              style={{ marginTop: "28px" }}
            />
            <div className="texts">
              <p>
                {shoppers.allContentfulShoppers.edges[0].node.benefitstitle2}
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={
                shoppers.allContentfulShoppers.edges[0].node.benefitsimage1.file
                  .url
              }
              style={{ marginTop: "60px" }}
            />
            <div className="texts">
              <p>
                {shoppers.allContentfulShoppers.edges[0].node.benefitstitle3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="process">
        <h2>{shoppers.allContentfulShoppers.edges[0].node.merchanttitle}</h2>
        <div className="process-1">
          <div className="process-1-text">
            <h6>
              {shoppers.allContentfulShoppers.edges[0].node.merchanttitle1}
            </h6>
            <p>{shoppers.allContentfulShoppers.edges[0].node.merchantext1}</p>
          </div>
          <div className="process-1-image">
            <img
              src={
                shoppers.allContentfulShoppers.edges[0].node.merhantimage1.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
          </div>
        </div>
        <div className="process-1">
          <div className="process-1-image">
            <img
              src={
                shoppers.allContentfulShoppers.edges[0].node.merchantimage2.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
          </div>
          <div className="process-1-text">
            <h6>
              {shoppers.allContentfulShoppers.edges[0].node.merchanttitle2}
            </h6>
            <p style={{ marginBottom: "30px" }}>
              {shoppers.allContentfulShoppers.edges[0].node.merchanttext2}
            </p>
            <a
              class="typeform-share join-program"
              href="https://trustlux.typeform.com/to/K0Jg7M"
              data-mode="popup"
              style={{ margin: "0 auto", marginBottom: "30px" }}
            >
              Join program
            </a>
          </div>
        </div>
      </div>
      <div className="program">
        <h1>{shoppers.allContentfulShoppers.edges[0].node.joinprogramtitle}</h1>
        <p> {shoppers.allContentfulShoppers.edges[0].node.joinprogramtext}</p>
        <a
          class="typeform-share join-program"
          href="https://trustlux.typeform.com/to/K0Jg7M"
          data-mode="popup"
          style={{ margin: "0 auto", marginBottom: "30px" }}
        >
          Join program
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default Merchants
