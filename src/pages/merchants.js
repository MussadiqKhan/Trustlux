import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
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
      <Helmet>
        <script src="https://embed.typeform.com/embed.js"></script>
      </Helmet>
      <div className="header_div">
        <Header />
      </div>
      <div
        class="hero-sec hero-merchants"
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
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="hero-content d-flex justify-content-center text-center">
                <div class="hero-content-inner maxw-800">
                  <h1 class="hero-title">
                    {
                      shoppers.allContentfulShoppers.edges[0].node
                        .merchantherotitle
                    }
                  </h1>
                  <p
                    style={{
                      maxWidth: "450px",
                      textAlign: "center",
                      margin: "0 auto",
                    }}
                  >
                    {
                      shoppers.allContentfulShoppers.edges[0].node
                        .merchantherotext
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="benefits-section section-padding bg-light-white">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title text-center mb-60">
                <h2>
                  {shoppers.allContentfulShoppers.edges[0].node.benefitstitle}
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
              <div class="benefits-content text-center">
                <div class="blockchain-img pt-50 pb-30">
                  <img
                    src={
                      shoppers.allContentfulShoppers.edges[0].node
                        .benefitsimage2.file.url
                    }
                    alt="image-confidence"
                  />
                </div>
                <p>
                  {shoppers.allContentfulShoppers.edges[0].node.benefitstitle1}
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="benefits-content text-center">
                <div class="blockchain-img pt-50 pb-30">
                  <img
                    src={
                      shoppers.allContentfulShoppers.edges[0].node
                        .benefitsimage3.file.url
                    }
                    alt="image-protection"
                  />
                </div>
                <p>
                  {shoppers.allContentfulShoppers.edges[0].node.benefitstitle2}
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="shoppers-content text-center">
                <div class="blockchain-img pt-50 pb-30">
                  <img
                    src={
                      shoppers.allContentfulShoppers.edges[0].node
                        .benefitsimage1.file.url
                    }
                    alt="image-luxury"
                  />
                </div>
                <p>
                  {shoppers.allContentfulShoppers.edges[0].node.benefitstitle3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery-area section-padding">
        <div class="heading-title text-center mb-60">
          <h2>{shoppers.allContentfulShoppers.edges[0].node.merchanttitle}</h2>
        </div>
        <div class="gallery-wrapper">
          <div class="single-gallery-left">
            <div class="gallery-text-inner">
              <h6 class="gallery-title">
                {shoppers.allContentfulShoppers.edges[0].node.merchanttitle1}
              </h6>
              <p class="gallery-text">
                {shoppers.allContentfulShoppers.edges[0].node.merchantext1}{" "}
              </p>
            </div>
            <div class="gallery-thumb">
              <img
                src={
                  shoppers.allContentfulShoppers.edges[0].node.merhantimage1
                    .file.url + "?fm=jpg&fl=progressive"
                }
                alt="gallery-thumb"
              />
            </div>
          </div>

          <div class="single-gallery-left">
            <div class="gallery-text-inner">
              <h6 class="gallery-title">
                {shoppers.allContentfulShoppers.edges[0].node.merchanttitle2}
              </h6>
              <p class="gallery-text">
                {shoppers.allContentfulShoppers.edges[0].node.merchanttext2}{" "}
              </p>
              <div class="view-item">
                <a
                  class="typeform-share button btn btn-normal rounded-50 mt-20"
                  href="https://trustlux.typeform.com/to/K0Jg7M"
                  data-mode="popup"
                >
                  Get started
                </a>
              </div>
            </div>
            <div class="gallery-thumb">
              <img
                src={
                  shoppers.allContentfulShoppers.edges[0].node.merchantimage2
                    .file.url + "?fm=jpg&fl=progressive"
                }
                alt="gallery-thumb"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section-wrapper bg-light-white section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto text-center mb-40">
              <div class="program-title">
                <h1>
                  {
                    shoppers.allContentfulShoppers.edges[0].node
                      .joinprogramtitle
                  }
                </h1>
                <p>
                  {shoppers.allContentfulShoppers.edges[0].node.joinprogramtext}{" "}
                </p>
                <div class="btn-option pt-30">
                  <a
                    class="typeform-share button btn btn-light-white rounded-50 bg-red"
                    href="https://trustlux.typeform.com/to/K0Jg7M"
                    data-mode="popup"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Merchants
