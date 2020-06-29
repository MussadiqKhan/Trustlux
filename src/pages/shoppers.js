import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"

const Shoppers = () => {
  const shoppers = useStaticQuery(graphql`
    query {
      allContentfulShoppers {
        edges {
          node {
            hero {
              file {
                url
              }
            }
            gallery {
              file {
                url
              }
            }
            timeline {
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
            certificationimage1 {
              file {
                url
              }
            }
            certificationimage {
              file {
                url
              }
            }
            processimage1 {
              file {
                url
              }
            }
            processimage2 {
              file {
                url
              }
            }
            processimage3 {
              file {
                url
              }
            }
            heroTitle
            herotext
            galleryTitle
            gallerytext
            timelineTitle
            timelinetext
            benefitstitle
            benefitstitle1
            benefitstitle2
            benefitstitle3
            certificationtitle
            certificationtext
            processtitle
            processtitle1
            processtext1
            processtitle2
            processtext2
            processtitle3
            processtext3
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
        class="hero-sec shopper-sec hero-shoppers"
        style={{
          backgroundImage: `url(${
            shoppers.allContentfulShoppers.edges[0].node.hero.file.url +
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
            <div class="col-lg-10 mx-auto text-center">
              <div class="hero-content d-flex justify-content-center text-center">
                <div class="hero-content-inner">
                  <h1 class="hero-title">
                    {shoppers.allContentfulShoppers.edges[0].node.heroTitle}
                  </h1>
                  <p
                    style={{
                      maxWidth: "450px",
                      textAlign: "center",
                      margin: "0 auto",
                    }}
                  >
                    {shoppers.allContentfulShoppers.edges[0].node.herotext}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="informations-section border-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="informations-content">
                <h2 class="heading-subtitle" style={{ maxWidth: "350px" }}>
                  {shoppers.allContentfulShoppers.edges[0].node.galleryTitle}
                </h2>
                <p>
                  {shoppers.allContentfulShoppers.edges[0].node.gallerytext}
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div className="shadow-gallery">
                {shoppers.allContentfulShoppers.edges[0].node.gallery.map(
                  (data, index) => (
                    <img
                      src={data.file.url + "?fm=jpg&fl=progressive"}
                      alt={"image" + index}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="step-card-section border-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="step-card-gallery">
                {shoppers.allContentfulShoppers.edges[0].node.timeline.map(
                  (data, index) => (
                    <div className="single-timeline-item">
                      <div className="timeline-item">
                        <img
                          src={data.file.url + "?fm=jpg&fl=progressive"}
                          alt={"image" + index}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div class="col-lg-6">
              <div class="follow-content">
                <h2 class="heading-title">
                  {shoppers.allContentfulShoppers.edges[0].node.timelineTitle}
                </h2>
                <p>
                  {shoppers.allContentfulShoppers.edges[0].node.timelinetext}
                </p>
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
      <div class="industry-sec section-padding">
        <div class="industry-sec-bg">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="industry-left pb-80">
                  <div class="industry-title">
                    <h2 class="mb-2">
                      {" "}
                      {
                        shoppers.allContentfulShoppers.edges[0].node
                          .certificationtitle
                      }
                    </h2>
                  </div>
                  <p>
                    {
                      shoppers.allContentfulShoppers.edges[0].node
                        .certificationtext
                    }
                  </p>

                  <div class="btn-trust mt-50">
                    <a>
                      <img
                        src={
                          shoppers.allContentfulShoppers.edges[0].node
                            .certificationimage.file.url +
                          "?fm=jpg&fl=progressive"
                        }
                        width="250"
                        alt="image-claim"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 instant-image-section float-right">
                <img
                  src={
                    shoppers.allContentfulShoppers.edges[0].node
                      .certificationimage1.file.url + "?fm=jpg&fl=progressive"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gallery-area section-padding">
        <div class="heading-title text-center mb-60">
          <h2>{shoppers.allContentfulShoppers.edges[0].node.processtitle}</h2>
        </div>
        <div class="gallery-wrapper">
          <div class="single-gallery-left">
            <div class="gallery-text-inner">
              <h6 class="gallery-title">
                {shoppers.allContentfulShoppers.edges[0].node.processtitle1}
              </h6>
              <p class="gallery-text">
                {shoppers.allContentfulShoppers.edges[0].node.processtext1}{" "}
              </p>
            </div>
            <div class="gallery-thumb">
              <img
                src={
                  shoppers.allContentfulShoppers.edges[0].node.processimage1
                    .file.url + "?fm=jpg&fl=progressive"
                }
                width="950"
                alt="gallery-thumb"
              />
            </div>
          </div>
          <div class="single-gallery-left">
            <div class="gallery-text-inner">
              <h6 class="gallery-title">
                {shoppers.allContentfulShoppers.edges[0].node.processtitle2}
              </h6>
              <p class="gallery-text">
                {shoppers.allContentfulShoppers.edges[0].node.processtext2}{" "}
              </p>
            </div>
            <div class="gallery-thumb">
              <img
                src={
                  shoppers.allContentfulShoppers.edges[0].node.processimage2
                    .file.url + "?fm=jpg&fl=progressive"
                }
                width="950"
                alt="gallery-thumb"
              />
            </div>
          </div>
          <div class="single-gallery-left">
            <div class="gallery-text-inner">
              <h6 class="gallery-title">
                {shoppers.allContentfulShoppers.edges[0].node.processtitle3}
              </h6>
              <p class="gallery-text">
                {shoppers.allContentfulShoppers.edges[0].node.processtext3}
              </p>
            </div>
            <div class="gallery-thumb">
              <img
                src={
                  shoppers.allContentfulShoppers.edges[0].node.processimage3
                    .file.url + "?fm=jpg&fl=progressive"
                }
                width="950"
                alt="gallery-thumb"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Shoppers
