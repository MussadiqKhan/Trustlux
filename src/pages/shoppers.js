import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/shoppers.css"
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
        className="shoppers-hero"
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
        <h1>{shoppers.allContentfulShoppers.edges[0].node.heroTitle}</h1>
        <p>{shoppers.allContentfulShoppers.edges[0].node.herotext}</p>
      </div>
      <div className="gallery">
        <div className="gallery-text">
          <h2>{shoppers.allContentfulShoppers.edges[0].node.galleryTitle}</h2>
          <p>{shoppers.allContentfulShoppers.edges[0].node.gallerytext}</p>
        </div>
        <div className="shadow-gallery">
          {shoppers.allContentfulShoppers.edges[0].node.gallery.map(data => (
            <img src={data.file.url + "?fm=jpg&fl=progressive"} />
          ))}
        </div>
      </div>
      <div className="step-card-section">
        <div class="step-card-gallery">
          {shoppers.allContentfulShoppers.edges[0].node.timeline.map(
            (data, index) => (
              <div className="single-timeline-item">
                <div className="timeline-item">
                  <img
                    src={data.file.url + "?fm=jpg&fl=progressive"}
                    className={"image" + index}
                  />
                </div>
              </div>
            )
          )}
        </div>
        <div className="follow-content">
          <h2>{shoppers.allContentfulShoppers.edges[0].node.timelineTitle}</h2>
          <p>{shoppers.allContentfulShoppers.edges[0].node.timelinetext}</p>
        </div>
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
      <div className="certifications">
        <div className="certification-1">
          <h2>
            {" "}
            {shoppers.allContentfulShoppers.edges[0].node.certificationtitle}
          </h2>
          <p>
            {" "}
            {shoppers.allContentfulShoppers.edges[0].node.certificationtext}
          </p>
          <img
            src={
              shoppers.allContentfulShoppers.edges[0].node.certificationimage
                .file.url + "?fm=jpg&fl=progressive"
            }
          />
        </div>
        <div className="certification-2">
          <img
            src={
              shoppers.allContentfulShoppers.edges[0].node.certificationimage1
                .file.url + "?fm=jpg&fl=progressive"
            }
          />
        </div>
      </div>
      <div className="process">
        <h2>{shoppers.allContentfulShoppers.edges[0].node.processtitle}</h2>
        <div className="process-1">
          <div className="process-1-text">
            <h6>
              {shoppers.allContentfulShoppers.edges[0].node.processtitle1}
            </h6>
            <p>{shoppers.allContentfulShoppers.edges[0].node.processtext1}</p>
          </div>
          <div className="process-1-image">
            <img
              src={
                shoppers.allContentfulShoppers.edges[0].node.processimage1.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
          </div>
        </div>
        <div className="process-1">
          <div className="process-1-image">
            <img
              src={
                shoppers.allContentfulShoppers.edges[0].node.processimage2.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
          </div>
          <div className="process-1-text">
            <h6>
              {shoppers.allContentfulShoppers.edges[0].node.processtitle2}
            </h6>
            <p>{shoppers.allContentfulShoppers.edges[0].node.processtext2}</p>
          </div>
        </div>
        <div className="process-1">
          <div className="process-1-text">
            <h6>
              {shoppers.allContentfulShoppers.edges[0].node.processtitle3}
            </h6>
            <p>{shoppers.allContentfulShoppers.edges[0].node.processtext3}</p>
          </div>
          <div className="process-1-image">
            <img
              src={
                shoppers.allContentfulShoppers.edges[0].node.processimage3.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shoppers
