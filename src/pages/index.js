import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../components/header"
import "../styles/homepage.css"
import stamp from "../../static/images/stamp.svg"
import bag1 from "../../static/images/bag-1.jpg"
import Footer from "../components/footer"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            heroVideo {
              file {
                url
              }
            }
            section2image {
              file {
                url
              }
            }
            section3image {
              file {
                url
              }
            }
            section4image {
              file {
                url
              }
            }
            section4mainimage {
              file {
                url
              }
            }
            section6image1 {
              file {
                url
              }
            }
            section6image2 {
              file {
                url
              }
            }
            section6image3 {
              file {
                url
              }
            }
            section7image1 {
              file {
                url
              }
            }
            section7image2 {
              file {
                url
              }
            }
            section7image3 {
              file {
                url
              }
            }
            section8images {
              file {
                url
              }
            }
            logos {
              file {
                url
              }
            }
            heroTitle
            heroParagraph
            section2text
            section2para
            section3text
            section4text
            section4para
            section5title
            section5text
            section6title
            section6text
            section6title1
            section6text1
            section6title2
            section6text2
            section6title3
            section6text3
            section7title
            section7text
            section7title1
            section7title2
            section7title3
            section8title
            section8text
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <Header />

      <div className="bg-video">
        <video loop autoPlay muted playsInline>
          <source
            src={data.allContentfulHomePage.edges[0].node.heroVideo.file.url}
            type="video/mp4"
          />
        </video>
        <div className="stamp">
          <img src={stamp} alt="stamp" width="100" />
        </div>
        <div className="text">
          <h1>{data.allContentfulHomePage.edges[0].node.heroTitle}</h1>
          <p>{data.allContentfulHomePage.edges[0].node.heroParagraph}</p>
        </div>
        <div className="app">
          <a
            href="https://apps.apple.com/us/app/trustlux/id1514729319?ls=1"
            target="_blank"
            className="icons-margin"
          >
            <svg
              width="169"
              height="57"
              viewBox="0 0 169 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M162.765 44.4975C162.765 46.9904 160.756 49 158.264 49H10.5262C8.03426 49 6 46.9904 6 44.4975V8.52798C6 6.03505 8.03426 4 10.5262 4H158.264C160.756 4 162.79 6.00961 162.79 8.52798L162.765 44.4975V44.4975Z"
                  fill="black"
                />
                <path
                  d="M40.4044 26.2583C40.3789 22.4681 43.5066 20.6111 43.6592 20.5348C41.8792 17.9401 39.133 17.584 38.1413 17.5585C35.8273 17.3041 33.5896 18.9576 32.3945 18.9576C31.1994 18.9576 29.3685 17.584 27.4106 17.6348C24.8932 17.6857 22.5283 19.1357 21.2315 21.3997C18.5615 26.0294 20.5449 32.8214 23.1132 36.5353C24.3846 38.3669 25.8849 40.4019 27.8428 40.3256C29.75 40.2493 30.4619 39.1046 32.7759 39.1046C35.0645 39.1046 35.7256 40.3256 37.7344 40.2747C39.7941 40.2493 41.0909 38.4432 42.3115 36.5862C43.7863 34.5003 44.3712 32.4144 44.3966 32.3126C44.3966 32.3126 40.4552 30.8118 40.4044 26.2583V26.2583ZM36.641 15.091C37.6581 13.7937 38.3701 12.0639 38.1667 10.2832C36.6664 10.3595 34.8102 11.3262 33.7422 12.5726C32.8013 13.6919 31.9368 15.498 32.1656 17.2024C33.8439 17.3296 35.573 16.3629 36.641 15.091V15.091Z"
                  fill="white"
                />
                <path
                  d="M68.1212 40.0712H65.4512L63.9764 35.4669H58.8908L57.4922 40.0712H54.8985L59.9333 24.4014H63.061L68.1212 40.0712ZM63.5441 33.5336L62.2219 29.4381C62.0693 29.0311 61.815 28.039 61.4336 26.4873H61.3827C61.2302 27.1487 60.9759 28.1408 60.6453 29.4381L59.3485 33.5336H63.5441ZM81.0642 34.2714C81.0642 36.2046 80.5302 37.7055 79.4876 38.8248C78.5468 39.8169 77.4025 40.3256 76.004 40.3256C74.5037 40.3256 73.4357 39.7914 72.7746 38.723V44.6501H70.2826V32.4652C70.2826 31.2697 70.2572 30.0232 70.1809 28.7513H72.3931L72.5457 30.532H72.5966C73.4357 29.1837 74.7071 28.4969 76.4108 28.4969C77.7331 28.4969 78.8519 29.0311 79.7419 30.0741C80.6319 31.1679 81.0642 32.567 81.0642 34.2714ZM78.5213 34.3731C78.5213 33.2793 78.2671 32.3635 77.7839 31.6512C77.2499 30.9135 76.5125 30.532 75.5971 30.532C74.9868 30.532 74.4274 30.7355 73.9188 31.1425C73.4103 31.5495 73.0797 32.0837 72.9271 32.7705C72.8509 33.0249 72.8254 33.2793 72.8 33.5336V35.4161C72.8 36.2301 73.0543 36.9424 73.5628 37.502C74.0714 38.0616 74.7325 38.3414 75.5208 38.3414C76.4617 38.3414 77.1991 37.9853 77.7331 37.2476C78.2671 36.5353 78.5213 35.5687 78.5213 34.3731ZM94.0834 34.2714C94.0834 36.2046 93.5494 37.7055 92.5069 38.8248C91.566 39.8169 90.4218 40.3256 89.0232 40.3256C87.5229 40.3256 86.455 39.7914 85.7938 38.723V44.6501H83.2764V32.4652C83.2764 31.2697 83.251 30.0232 83.1747 28.7513H85.387L85.5395 30.532H85.5904C86.4295 29.1837 87.7009 28.4969 89.4046 28.4969C90.7269 28.4969 91.8457 29.0311 92.7357 30.0741C93.6257 31.1679 94.0834 32.567 94.0834 34.2714ZM91.5152 34.3731C91.5152 33.2793 91.2609 32.3635 90.7778 31.6512C90.2438 30.9135 89.5063 30.532 88.5909 30.532C87.9806 30.532 87.4212 30.7355 86.9127 31.1425C86.4041 31.5495 86.0735 32.0837 85.921 32.7705C85.8447 33.0758 85.7938 33.3301 85.7938 33.5336V35.4161C85.7938 36.2301 86.0481 36.9424 86.5567 37.502C87.0652 38.0616 87.7264 38.3414 88.5146 38.3414C89.4555 38.3414 90.1929 37.9853 90.7269 37.2476C91.2609 36.5353 91.5152 35.5687 91.5152 34.3731ZM108.603 35.6704C108.603 36.9932 108.145 38.0871 107.204 38.9265C106.187 39.8423 104.763 40.3002 102.932 40.3002C101.254 40.3002 99.9065 39.9695 98.8639 39.3335L99.4488 37.2476C100.542 37.909 101.763 38.2143 103.085 38.2143C104.026 38.2143 104.763 38.0108 105.297 37.5783C105.831 37.1459 106.086 36.5862 106.086 35.8739C106.086 35.238 105.857 34.7038 105.424 34.2714C104.992 33.8389 104.28 33.4319 103.263 33.0503C100.517 32.0328 99.1436 30.532 99.1436 28.5478C99.1436 27.2504 99.6268 26.2075 100.593 25.3935C101.559 24.5794 102.856 24.1724 104.433 24.1724C105.857 24.1724 107.052 24.4268 107.993 24.9101L107.357 26.9452C106.467 26.4619 105.475 26.2329 104.356 26.2329C103.466 26.2329 102.78 26.4619 102.271 26.8943C101.864 27.2759 101.636 27.7592 101.636 28.3188C101.636 28.9293 101.864 29.4635 102.348 29.8451C102.754 30.2267 103.517 30.6083 104.636 31.0661C105.984 31.6003 106.976 32.2363 107.611 32.974C108.298 33.6863 108.603 34.5766 108.603 35.6704ZM116.918 30.6591H114.146V36.1538C114.146 37.5529 114.629 38.2397 115.621 38.2397C116.079 38.2397 116.435 38.2143 116.74 38.1125L116.816 40.0204C116.333 40.1984 115.672 40.3002 114.858 40.3002C113.867 40.3002 113.104 39.9949 112.544 39.3844C111.985 38.7739 111.705 37.7564 111.705 36.3318V30.6337H110.052V28.7513H111.705V26.6908L114.172 25.9531V28.7767H116.943L116.918 30.6591ZM129.378 34.3222C129.378 36.052 128.869 37.4766 127.878 38.5958C126.835 39.7405 125.462 40.3256 123.733 40.3256C122.08 40.3256 120.758 39.766 119.766 38.6721C118.774 37.5783 118.291 36.1792 118.291 34.5003C118.291 32.7451 118.8 31.3205 119.817 30.2013C120.834 29.082 122.207 28.5223 123.911 28.5223C125.564 28.5223 126.911 29.082 127.903 30.1758C128.895 31.2442 129.378 32.6433 129.378 34.3222ZM126.784 34.3731C126.784 33.3301 126.555 32.4398 126.123 31.7021C125.589 30.8118 124.852 30.3539 123.86 30.3539C122.843 30.3539 122.08 30.8118 121.546 31.7021C121.088 32.4398 120.885 33.3556 120.885 34.424C120.885 35.4669 121.114 36.3573 121.546 37.095C122.08 37.9853 122.843 38.4432 123.834 38.4432C124.801 38.4432 125.538 37.9853 126.098 37.0695C126.555 36.3064 126.784 35.4161 126.784 34.3731ZM137.54 30.9644C137.286 30.9135 137.006 30.8881 136.752 30.8881C135.862 30.8881 135.175 31.2188 134.718 31.8802C134.311 32.4652 134.082 33.203 134.082 34.1187V40.0458H131.565V32.3126C131.565 31.117 131.539 29.9469 131.488 28.7513H133.675L133.777 30.9135H133.853C134.107 30.1758 134.54 29.5653 135.099 29.1329C135.633 28.7513 136.269 28.5223 136.905 28.5223C137.133 28.5223 137.337 28.5478 137.54 28.5732V30.9644ZM148.78 33.8898C148.78 34.2714 148.754 34.6529 148.678 35.0345H141.151C141.176 36.1538 141.532 37.0187 142.244 37.6037C142.88 38.1379 143.694 38.3923 144.711 38.3923C145.83 38.3923 146.847 38.2143 147.762 37.8581L148.144 39.5879C147.076 40.0458 145.804 40.2747 144.355 40.2747C142.6 40.2747 141.227 39.766 140.236 38.723C139.244 37.6801 138.735 36.3064 138.735 34.5766C138.735 32.8723 139.193 31.4477 140.134 30.3284C141.1 29.1074 142.422 28.5223 144.075 28.5223C145.703 28.5223 146.949 29.1329 147.762 30.3284C148.449 31.2951 148.78 32.4652 148.78 33.8898ZM146.389 33.2284C146.415 32.4907 146.237 31.8293 145.906 31.2951C145.474 30.5828 144.813 30.2521 143.897 30.2521C143.084 30.2521 142.397 30.5828 141.888 31.2697C141.482 31.8039 141.227 32.4652 141.151 33.2284H146.389Z"
                  fill="white"
                />
                <path
                  d="M58.5437 17.5371V12.753H60.0157C60.4363 12.753 60.8119 12.8483 61.1427 13.0389C61.4757 13.2273 61.7352 13.4967 61.9214 13.8472C62.1076 14.1955 62.2007 14.592 62.2007 15.0366V15.2568C62.2007 15.7014 62.1087 16.0968 61.9247 16.4429C61.7429 16.789 61.4855 17.0574 61.1526 17.2479C60.8196 17.4385 60.4439 17.5349 60.0255 17.5371H58.5437ZM59.5294 13.5515V16.7452H60.0058C60.3914 16.7452 60.686 16.6193 60.8897 16.3674C61.0934 16.1155 61.1975 15.7551 61.2018 15.2863V15.0333C61.2018 14.547 61.1011 14.179 60.8996 13.9293C60.698 13.6774 60.4034 13.5515 60.0157 13.5515H59.5294Z"
                  fill="white"
                />
                <path
                  d="M67.523 15.2535C67.523 15.7244 67.4398 16.1374 67.2733 16.4922C67.1068 16.8471 66.868 17.1209 66.557 17.3137C66.2481 17.5064 65.8933 17.6028 65.4924 17.6028C65.0959 17.6028 64.7421 17.5075 64.4311 17.3169C64.12 17.1264 63.8791 16.8548 63.7082 16.5021C63.5374 16.1472 63.4508 15.7398 63.4487 15.2798V15.0432C63.4487 14.5722 63.533 14.1582 63.7017 13.8012C63.8725 13.4419 64.1124 13.167 64.4212 12.9764C64.7323 12.7837 65.0872 12.6873 65.4858 12.6873C65.8845 12.6873 66.2383 12.7837 66.5471 12.9764C66.8582 13.167 67.098 13.4419 67.2667 13.8012C67.4376 14.1582 67.523 14.5711 67.523 15.0399V15.2535ZM66.5241 15.0366C66.5241 14.535 66.4343 14.1538 66.2547 13.8932C66.0751 13.6325 65.8188 13.5022 65.4858 13.5022C65.1551 13.5022 64.8999 13.6314 64.7202 13.8899C64.5406 14.1462 64.4497 14.523 64.4475 15.0202V15.2535C64.4475 15.742 64.5373 16.1209 64.717 16.3904C64.8966 16.6598 65.1551 16.7945 65.4924 16.7945C65.8232 16.7945 66.0773 16.6653 66.2547 16.4068C66.4321 16.1461 66.5219 15.7672 66.5241 15.2699V15.0366Z"
                  fill="white"
                />
                <path
                  d="M72.6383 16.1571L73.2823 12.753H74.2647L73.2034 17.5371H72.2111L71.4324 14.3368L70.6537 17.5371H69.6614L68.6001 12.753H69.5825L70.2298 16.1505L71.0184 12.753H71.853L72.6383 16.1571Z"
                  fill="white"
                />
                <path
                  d="M79.3636 17.5371H78.3779L76.459 14.3893V17.5371H75.4732V12.753H76.459L78.3812 15.9074V12.753H79.3636V17.5371Z"
                  fill="white"
                />
                <path
                  d="M81.8831 16.7452H83.9762V17.5371H80.8974V12.753H81.8831V16.7452Z"
                  fill="white"
                />
                <path
                  d="M88.937 15.2535C88.937 15.7244 88.8538 16.1374 88.6873 16.4922C88.5208 16.8471 88.282 17.1209 87.971 17.3137C87.6621 17.5064 87.3073 17.6028 86.9064 17.6028C86.5099 17.6028 86.1562 17.5075 85.8451 17.3169C85.5341 17.1264 85.2931 16.8548 85.1222 16.5021C84.9514 16.1472 84.8648 15.7398 84.8627 15.2798V15.0432C84.8627 14.5722 84.947 14.1582 85.1157 13.8012C85.2865 13.4419 85.5264 13.167 85.8352 12.9764C86.1463 12.7837 86.5012 12.6873 86.8998 12.6873C87.2985 12.6873 87.6523 12.7837 87.9611 12.9764C88.2722 13.167 88.5121 13.4419 88.6807 13.8012C88.8516 14.1582 88.937 14.5711 88.937 15.0399V15.2535ZM87.9381 15.0366C87.9381 14.535 87.8483 14.1538 87.6687 13.8932C87.4891 13.6325 87.2328 13.5022 86.8998 13.5022C86.5691 13.5022 86.3139 13.6314 86.1343 13.8899C85.9546 14.1462 85.8637 14.523 85.8615 15.0202V15.2535C85.8615 15.742 85.9513 16.1209 86.131 16.3904C86.3106 16.6598 86.5691 16.7945 86.9064 16.7945C87.2372 16.7945 87.4913 16.6653 87.6687 16.4068C87.8461 16.1461 87.9359 15.7672 87.9381 15.2699V15.0366Z"
                  fill="white"
                />
                <path
                  d="M92.9548 16.5514H91.2265L90.898 17.5371H89.8498L91.6307 12.753H92.5441L94.3349 17.5371H93.2867L92.9548 16.5514ZM91.4927 15.7529H92.6887L92.0874 13.9622L91.4927 15.7529Z"
                  fill="white"
                />
                <path
                  d="M95.4547 17.5371V12.753H96.9267C97.3473 12.753 97.7229 12.8483 98.0537 13.0389C98.3867 13.2273 98.6462 13.4967 98.8324 13.8472C99.0186 14.1955 99.1117 14.592 99.1117 15.0366V15.2568C99.1117 15.7014 99.0197 16.0968 98.8357 16.4429C98.6539 16.789 98.3965 17.0574 98.0636 17.2479C97.7306 17.4385 97.3549 17.5349 96.9365 17.5371H95.4547ZM96.4404 13.5515V16.7452H96.9168C97.3024 16.7452 97.597 16.6193 97.8007 16.3674C98.0044 16.1155 98.1085 15.7551 98.1128 15.2863V15.0333C98.1128 14.547 98.0121 14.179 97.8106 13.9293C97.609 13.6774 97.3144 13.5515 96.9267 13.5515H96.4404Z"
                  fill="white"
                />
                <path
                  d="M105.731 15.5821H103.839V17.5371H102.853V12.753H105.968V13.5515H103.839V14.7869H105.731V15.5821Z"
                  fill="white"
                />
                <path
                  d="M108.983 15.7858H108.198V17.5371H107.212V12.753H108.99C109.555 12.753 109.991 12.879 110.298 13.1309C110.604 13.3828 110.758 13.7387 110.758 14.1988C110.758 14.5251 110.687 14.7979 110.544 15.0169C110.404 15.2338 110.19 15.4068 109.903 15.5361L110.939 17.4911V17.5371H109.88L108.983 15.7858ZM108.198 14.9873H108.993C109.241 14.9873 109.433 14.9249 109.568 14.8001C109.704 14.673 109.772 14.4989 109.772 14.2776C109.772 14.052 109.707 13.8746 109.578 13.7453C109.451 13.6161 109.255 13.5515 108.99 13.5515H108.198V14.9873Z"
                  fill="white"
                />
                <path
                  d="M116.113 15.2535C116.113 15.7244 116.03 16.1374 115.863 16.4922C115.697 16.8471 115.458 17.1209 115.147 17.3137C114.838 17.5064 114.483 17.6028 114.082 17.6028C113.686 17.6028 113.332 17.5075 113.021 17.3169C112.71 17.1264 112.469 16.8548 112.298 16.5021C112.127 16.1472 112.041 15.7398 112.039 15.2798V15.0432C112.039 14.5722 112.123 14.1582 112.292 13.8012C112.462 13.4419 112.702 13.167 113.011 12.9764C113.322 12.7837 113.677 12.6873 114.076 12.6873C114.474 12.6873 114.828 12.7837 115.137 12.9764C115.448 13.167 115.688 13.4419 115.857 13.8012C116.028 14.1582 116.113 14.5711 116.113 15.0399V15.2535ZM115.114 15.0366C115.114 14.535 115.024 14.1538 114.845 13.8932C114.665 13.6325 114.409 13.5022 114.076 13.5022C113.745 13.5022 113.49 13.6314 113.31 13.8899C113.131 14.1462 113.04 14.523 113.037 15.0202V15.2535C113.037 15.742 113.127 16.1209 113.307 16.3904C113.487 16.6598 113.745 16.7945 114.082 16.7945C114.413 16.7945 114.667 16.6653 114.845 16.4068C115.022 16.1461 115.112 15.7672 115.114 15.2699V15.0366Z"
                  fill="white"
                />
                <path
                  d="M118.79 12.753L120.019 16.2228L121.241 12.753H122.536V17.5371H121.547V16.2294L121.646 13.972L120.354 17.5371H119.677L118.389 13.9753L118.488 16.2294V17.5371H117.502V12.753H118.79Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="168.79"
                  height="57"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="3" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.trustlux.mobile.app"
            target="_blank"
            className="icons-margin"
            style={{ zIndex: "1" }}
          >
            <svg
              width="169"
              height="58"
              viewBox="0 0 169 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ zIndex: "-1" }}
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M162.765 44.7077C162.765 47.2006 160.756 49.2102 158.264 49.2102H10.5262C8.03426 49.2102 6 47.2006 6 44.7077V8.73819C6 6.24525 8.03426 4.21021 10.5262 4.21021H158.264C160.756 4.21021 162.79 6.21981 162.79 8.73819L162.765 44.7077Z"
                  fill="black"
                />
                <path
                  d="M85.0294 30.8645C82.4248 30.8645 80.3077 32.8641 80.3077 35.624C80.3077 38.3699 82.4248 40.3836 85.0294 40.3836C87.634 40.3836 89.7511 38.3699 89.7511 35.624C89.7511 32.8782 87.634 30.8645 85.0294 30.8645ZM85.0294 38.5107C83.6087 38.5107 82.3691 37.3138 82.3691 35.624C82.3691 33.9061 83.5947 32.7374 85.0294 32.7374C86.464 32.7374 87.6897 33.9061 87.6897 35.624C87.6758 37.3138 86.4501 38.5107 85.0294 38.5107ZM97.6764 31.9347H97.6067C97.1471 31.3715 96.2557 30.8645 95.1275 30.8645C92.7736 30.8645 90.6147 32.9627 90.6147 35.6381C90.6147 38.2995 92.7736 40.3836 95.1275 40.3836C96.2557 40.3836 97.1471 39.8766 97.6067 39.2993H97.6764V39.9893C97.6764 41.8058 96.7153 42.7774 95.1693 42.7774C93.9018 42.7774 93.1218 41.8621 92.8014 41.0876L91.0047 41.848C91.52 43.1153 92.8989 44.6643 95.1832 44.6643C97.6067 44.6643 99.6542 43.228 99.6542 39.7076V31.1602H97.6903L97.6764 31.9347ZM95.3085 38.5107C93.8879 38.5107 92.69 37.2997 92.69 35.6381C92.69 33.9624 93.8879 32.7374 95.3085 32.7374C96.7153 32.7374 97.8157 33.9624 97.8157 35.6381C97.8157 37.3138 96.7153 38.5107 95.3085 38.5107ZM74.7224 30.8645C72.1177 30.8645 70.0006 32.8641 70.0006 35.624C70.0006 38.3699 72.1177 40.3836 74.7224 40.3836C77.327 40.3836 79.4441 38.3699 79.4441 35.624C79.4441 32.8782 77.327 30.8645 74.7224 30.8645V30.8645ZM74.7224 38.5107C73.3017 38.5107 72.062 37.3138 72.062 35.624C72.062 33.9061 73.2877 32.7374 74.7224 32.7374C76.1431 32.7374 77.3827 33.9061 77.3827 35.624C77.3688 37.3138 76.1431 38.5107 74.7224 38.5107ZM62.4514 32.3149V34.3286H67.2289C67.0896 35.4691 66.7135 36.2999 66.1425 36.8773C65.446 37.5814 64.3596 38.3558 62.4514 38.3558C59.5125 38.3558 57.2143 35.962 57.2143 32.9908C57.2143 30.0196 59.5125 27.6258 62.4514 27.6258C64.0393 27.6258 65.1953 28.2595 66.0589 29.0621L67.4657 27.6399C66.2678 26.4852 64.68 25.5981 62.4514 25.5981C58.4261 25.5981 55.0276 28.9213 55.0276 32.9908C55.0276 37.0603 58.4122 40.3836 62.4514 40.3836C64.6243 40.3836 66.2678 39.6654 67.5492 38.3136C68.8724 36.9759 69.2763 35.103 69.2763 33.5963C69.2763 33.1316 69.2346 32.6951 69.1649 32.329L62.4514 32.3149ZM112.594 33.9061C112.204 32.8359 111.006 30.8786 108.568 30.8786C106.145 30.8786 104.125 32.8078 104.125 35.6381C104.125 38.2995 106.117 40.3976 108.791 40.3976C110.95 40.3976 112.204 39.0599 112.719 38.2854L111.117 37.2012C110.588 37.9897 109.85 38.5107 108.805 38.5107C107.761 38.5107 107.008 38.0179 106.521 37.0744L112.817 34.4412L112.594 33.9061ZM106.187 35.4832C106.131 33.6386 107.593 32.7092 108.652 32.7092C109.474 32.7092 110.17 33.1176 110.393 33.7231L106.187 35.4832ZM101.061 40.1019H103.122V26.1191H101.061V40.1019ZM122.288 26.1191H117.343V40.1019H119.405V34.8073H122.288C124.572 34.8073 126.829 33.1316 126.829 30.4562C126.829 27.7948 124.572 26.1191 122.288 26.1191ZM122.344 32.8359H119.405V28.0483H122.344C123.89 28.0483 124.767 29.3437 124.767 30.4421C124.767 31.5404 123.89 32.8359 122.344 32.8359ZM127.971 40.1019H130.032V26.1191H127.971V40.1019ZM135.102 30.8364C133.612 30.8364 132.052 31.4982 131.411 32.9767L133.25 33.7512C133.64 32.9767 134.364 32.7233 135.13 32.7233C136.202 32.7233 137.289 33.371 137.303 34.5257V34.6665C136.927 34.4553 136.133 34.1314 135.144 34.1314C133.166 34.1314 131.16 35.2298 131.16 37.2856C131.16 39.1585 132.776 40.3554 134.601 40.3554C135.993 40.3554 136.759 39.7217 137.233 38.9895H137.303V40.0738H139.294V34.7088C139.308 32.2304 137.47 30.8364 135.102 30.8364V30.8364ZM134.851 38.5107C134.169 38.5107 133.236 38.1728 133.236 37.3279C133.236 36.2436 134.406 35.8353 135.422 35.8353C136.328 35.8353 136.759 36.0324 137.303 36.2999C137.149 37.5954 136.049 38.5107 134.851 38.5107ZM146.565 31.1462L144.197 37.2152H144.128L141.676 31.1462H139.448L143.125 39.6232L141.022 44.3545H143.18L148.863 31.1602H146.565V31.1462Z"
                  fill="white"
                />
                <path
                  d="M20.3853 13.5197C20.0732 13.8489 19.8859 14.3662 19.8859 15.0247V38.7447C19.8859 39.4031 20.0732 39.9205 20.3853 40.2497L20.4634 40.3281L33.6977 27.0336V26.7201L20.4634 13.4256L20.3853 13.5197Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="1.35938"
                />
                <path
                  d="M38.0987 31.4702L33.6976 27.0335V26.72L38.1143 22.2832L38.2079 22.346L43.4362 25.3247C44.9344 26.1713 44.9344 27.5665 43.4362 28.4288L38.2079 31.4075L38.0987 31.4702Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="1.35938"
                />
                <path
                  d="M38.2079 31.4076L33.6976 26.8768L20.3852 40.2497C20.869 40.7671 21.6961 40.8454 22.6013 40.3124L38.2079 31.4076Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="1.35938"
                />
                <path
                  d="M38.2079 22.3617L22.6013 13.4569C21.6805 12.9396 20.869 13.0023 20.3852 13.5196L33.6976 26.8925L38.2079 22.3617Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="1.35938"
                />
                <path
                  d="M58.5436 17.7473V12.9632H60.0157C60.4362 12.9632 60.8119 13.0585 61.1427 13.2491C61.4756 13.4375 61.7352 13.7069 61.9214 14.0574C62.1076 14.4057 62.2007 14.8022 62.2007 15.2468V15.467C62.2007 15.9117 62.1087 16.307 61.9247 16.6531C61.7429 16.9992 61.4855 17.2676 61.1525 17.4582C60.8196 17.6487 60.4439 17.7451 60.0255 17.7473H58.5436ZM59.5294 13.7617V16.9554H60.0058C60.3913 16.9554 60.686 16.8295 60.8897 16.5776C61.0934 16.3257 61.1974 15.9653 61.2018 15.4965V15.2435C61.2018 14.7573 61.1011 14.3892 60.8995 14.1395C60.698 13.8876 60.4034 13.7617 60.0157 13.7617H59.5294Z"
                  fill="white"
                />
                <path
                  d="M67.523 15.4637C67.523 15.9347 67.4397 16.3476 67.2733 16.7024C67.1068 17.0573 66.868 17.3311 66.557 17.5239C66.2481 17.7166 65.8932 17.813 65.4924 17.813C65.0959 17.813 64.7421 17.7177 64.4311 17.5272C64.12 17.3366 63.8791 17.065 63.7082 16.7123C63.5374 16.3574 63.4508 15.95 63.4486 15.49V15.2534C63.4486 14.7824 63.533 14.3684 63.7016 14.0114C63.8725 13.6521 64.1124 13.3772 64.4212 13.1867C64.7323 12.9939 65.0871 12.8975 65.4858 12.8975C65.8845 12.8975 66.2383 12.9939 66.5471 13.1867C66.8582 13.3772 67.098 13.6521 67.2667 14.0114C67.4376 14.3684 67.523 14.7813 67.523 15.2501V15.4637ZM66.5241 15.2468C66.5241 14.7452 66.4343 14.3641 66.2547 14.1034C66.0751 13.8427 65.8188 13.7124 65.4858 13.7124C65.155 13.7124 64.8998 13.8416 64.7202 14.1001C64.5406 14.3564 64.4497 14.7332 64.4475 15.2304V15.4637C64.4475 15.9522 64.5373 16.3311 64.7169 16.6006C64.8966 16.87 65.155 17.0047 65.4924 17.0047C65.8231 17.0047 66.0772 16.8755 66.2547 16.617C66.4321 16.3563 66.5219 15.9774 66.5241 15.4801V15.2468Z"
                  fill="white"
                />
                <path
                  d="M72.6383 16.3673L73.2823 12.9632H74.2647L73.2034 17.7473H72.2111L71.4324 14.547L70.6537 17.7473H69.6614L68.6001 12.9632H69.5825L70.2298 16.3607L71.0184 12.9632H71.853L72.6383 16.3673Z"
                  fill="white"
                />
                <path
                  d="M79.3636 17.7473H78.3779L76.459 14.5995V17.7473H75.4732V12.9632H76.459L78.3811 16.1176V12.9632H79.3636V17.7473Z"
                  fill="white"
                />
                <path
                  d="M81.8831 16.9554H83.9761V17.7473H80.8974V12.9632H81.8831V16.9554Z"
                  fill="white"
                />
                <path
                  d="M88.937 15.4637C88.937 15.9347 88.8538 16.3476 88.6873 16.7024C88.5208 17.0573 88.282 17.3311 87.971 17.5239C87.6621 17.7166 87.3073 17.813 86.9064 17.813C86.5099 17.813 86.1561 17.7177 85.8451 17.5272C85.534 17.3366 85.2931 17.065 85.1222 16.7123C84.9514 16.3574 84.8648 15.95 84.8626 15.49V15.2534C84.8626 14.7824 84.947 14.3684 85.1156 14.0114C85.2865 13.6521 85.5264 13.3772 85.8352 13.1867C86.1463 12.9939 86.5011 12.8975 86.8998 12.8975C87.2985 12.8975 87.6523 12.9939 87.9611 13.1867C88.2722 13.3772 88.512 13.6521 88.6807 14.0114C88.8516 14.3684 88.937 14.7813 88.937 15.2501V15.4637ZM87.9381 15.2468C87.9381 14.7452 87.8483 14.3641 87.6687 14.1034C87.4891 13.8427 87.2328 13.7124 86.8998 13.7124C86.5691 13.7124 86.3139 13.8416 86.1342 14.1001C85.9546 14.3564 85.8637 14.7332 85.8615 15.2304V15.4637C85.8615 15.9522 85.9513 16.3311 86.1309 16.6006C86.3106 16.87 86.5691 17.0047 86.9064 17.0047C87.2372 17.0047 87.4913 16.8755 87.6687 16.617C87.8461 16.3563 87.9359 15.9774 87.9381 15.4801V15.2468Z"
                  fill="white"
                />
                <path
                  d="M92.9548 16.7616H91.2265L90.8979 17.7473H89.8498L91.6307 12.9632H92.5441L94.3349 17.7473H93.2867L92.9548 16.7616ZM91.4927 15.9631H92.6887L92.0874 14.1724L91.4927 15.9631Z"
                  fill="white"
                />
                <path
                  d="M95.4546 17.7473V12.9632H96.9267C97.3472 12.9632 97.7229 13.0585 98.0537 13.2491C98.3866 13.4375 98.6462 13.7069 98.8324 14.0574C99.0186 14.4057 99.1117 14.8022 99.1117 15.2468V15.467C99.1117 15.9117 99.0197 16.307 98.8357 16.6531C98.6539 16.9992 98.3965 17.2676 98.0635 17.4582C97.7306 17.6487 97.3549 17.7451 96.9365 17.7473H95.4546ZM96.4404 13.7617V16.9554H96.9168C97.3023 16.9554 97.597 16.8295 97.8007 16.5776C98.0044 16.3257 98.1084 15.9653 98.1128 15.4965V15.2435C98.1128 14.7573 98.0121 14.3892 97.8105 14.1395C97.609 13.8876 97.3144 13.7617 96.9267 13.7617H96.4404Z"
                  fill="white"
                />
                <path
                  d="M105.731 15.7923H103.839V17.7473H102.853V12.9632H105.968V13.7617H103.839V14.9971H105.731V15.7923Z"
                  fill="white"
                />
                <path
                  d="M108.983 15.996H108.198V17.7473H107.212V12.9632H108.99C109.555 12.9632 109.991 13.0892 110.298 13.3411C110.604 13.593 110.758 13.949 110.758 14.409C110.758 14.7353 110.687 15.0081 110.544 15.2271C110.404 15.444 110.19 15.617 109.903 15.7463L110.938 17.7013V17.7473H109.88L108.983 15.996ZM108.198 15.1975H108.993C109.241 15.1975 109.433 15.1351 109.568 15.0103C109.704 14.8832 109.772 14.7091 109.772 14.4878C109.772 14.2622 109.707 14.0848 109.578 13.9555C109.451 13.8263 109.255 13.7617 108.99 13.7617H108.198V15.1975Z"
                  fill="white"
                />
                <path
                  d="M116.113 15.4637C116.113 15.9347 116.03 16.3476 115.863 16.7024C115.697 17.0573 115.458 17.3311 115.147 17.5239C114.838 17.7166 114.483 17.813 114.082 17.813C113.686 17.813 113.332 17.7177 113.021 17.5272C112.71 17.3366 112.469 17.065 112.298 16.7123C112.127 16.3574 112.041 15.95 112.039 15.49V15.2534C112.039 14.7824 112.123 14.3684 112.292 14.0114C112.462 13.6521 112.702 13.3772 113.011 13.1867C113.322 12.9939 113.677 12.8975 114.076 12.8975C114.474 12.8975 114.828 12.9939 115.137 13.1867C115.448 13.3772 115.688 13.6521 115.857 14.0114C116.027 14.3684 116.113 14.7813 116.113 15.2501V15.4637ZM115.114 15.2468C115.114 14.7452 115.024 14.3641 114.845 14.1034C114.665 13.8427 114.409 13.7124 114.076 13.7124C113.745 13.7124 113.49 13.8416 113.31 14.1001C113.131 14.3564 113.04 14.7332 113.037 15.2304V15.4637C113.037 15.9522 113.127 16.3311 113.307 16.6006C113.487 16.87 113.745 17.0047 114.082 17.0047C114.413 17.0047 114.667 16.8755 114.845 16.617C115.022 16.3563 115.112 15.9774 115.114 15.4801V15.2468Z"
                  fill="white"
                />
                <path
                  d="M118.79 12.9632L120.019 16.433L121.241 12.9632H122.536V17.7473H121.547V16.4396L121.646 14.1822L120.354 17.7473H119.677L118.389 14.1855L118.488 16.4396V17.7473H117.502V12.9632H118.79Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0.210205"
                  width="168.79"
                  height="57"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="3" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div
        className="section-2"
        style={{
          backgroundImage: `url(${
            data.allContentfulHomePage.edges[0].node.section2image.file.url +
            "?fm=jpg&fl=progressive"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
          marginTop: "100px",
          paddingBottom: "50px",
        }}
      >
        <h1
          style={{
            paddingLeft: "50px",
            maxWidth: "600px",
            lineHeight: "3rem",
            color: "black",
            marginBottom: "30px",
          }}
        >
          {data.allContentfulHomePage.edges[0].node.section2text}
        </h1>
        <p
          style={{
            paddingLeft: "50px",
            maxWidth: "400px",
            lineHeight: "2rem",
            color: "black",
            fontSize: "22px",
            marginBottom: "130px",
          }}
        >
          {data.allContentfulHomePage.edges[0].node.section2para}
        </p>
        <img
          src={
            data.allContentfulHomePage.edges[0].node.section2image.file.url +
            "?fm=jpg&fl=progressive"
          }
          width="100%"
          className="mobile"
        />
      </div>
      <div className="section-3">
        <img
          src={
            data.allContentfulHomePage.edges[0].node.section3image.file.url +
            "?fm=jpg&fl=progressive"
          }
          width="50%"
          className=""
        />
        <h4> {data.allContentfulHomePage.edges[0].node.section3text}</h4>
      </div>
      <div
        className="section-2"
        style={{
          backgroundImage: `url(${
            data.allContentfulHomePage.edges[0].node.section4mainimage.file
              .url + "?fm=jpg&fl=progressive"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
          marginTop: "100px",
          paddingBottom: "50px",
        }}
      >
        <h1
          style={{
            paddingLeft: "50px",
            maxWidth: "600px",
            lineHeight: "3rem",
            color: "black",
            marginBottom: "30px",
          }}
        >
          {data.allContentfulHomePage.edges[0].node.section4text}
        </h1>
        <p
          style={{
            paddingLeft: "50px",
            maxWidth: "700px",
            lineHeight: "2rem",
            color: "black",
            fontSize: "22px",
            marginBottom: "130px",
          }}
        >
          {data.allContentfulHomePage.edges[0].node.section4para}
        </p>
        <img
          src={data.allContentfulHomePage.edges[0].node.section4image.file.url}
          width="300"
          style={{ paddingLeft: "50px" }}
        />
        <img
          src={
            data.allContentfulHomePage.edges[0].node.section4mainimage.file
              .url + "?fm=jpg&fl=progressive"
          }
          width="100%"
          className="mobile"
        />
      </div>
      <div className="section-5">
        <h1>{data.allContentfulHomePage.edges[0].node.section5title}</h1>
        <p>{data.allContentfulHomePage.edges[0].node.section5text}</p>
        <div className="logos">
          {data.allContentfulHomePage.edges[0].node.logos.map(data => (
            <img src={data.file.url + "?fm=jpg&fl=progressive"} />
          ))}
        </div>
      </div>
      <div className="section-6">
        <h1>{data.allContentfulHomePage.edges[0].node.section6title}</h1>
        <p>{data.allContentfulHomePage.edges[0].node.section6text}</p>
        <div className="parent">
          <div className="card">
            <img
              src={
                data.allContentfulHomePage.edges[0].node.section6image1.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
            <h2>{data.allContentfulHomePage.edges[0].node.section6title1}</h2>
            <p>{data.allContentfulHomePage.edges[0].node.section6text1}</p>
          </div>
          <div className="card">
            <img
              src={
                data.allContentfulHomePage.edges[0].node.section6image2.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
            <h2>{data.allContentfulHomePage.edges[0].node.section6title2}</h2>
            <p>{data.allContentfulHomePage.edges[0].node.section6text2}</p>
          </div>
          <div className="card">
            <img
              src={
                data.allContentfulHomePage.edges[0].node.section6image3.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
            <h2>{data.allContentfulHomePage.edges[0].node.section6title3}</h2>
            <p>{data.allContentfulHomePage.edges[0].node.section6text3}</p>
          </div>
        </div>
      </div>
      <div className="section-6">
        <h1>{data.allContentfulHomePage.edges[0].node.section7title}</h1>
        <p>{data.allContentfulHomePage.edges[0].node.section7text}</p>
        <div className="parent-section7">
          <div className="card-section7">
            <img
              src={
                data.allContentfulHomePage.edges[0].node.section7image1.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
            <h3>{data.allContentfulHomePage.edges[0].node.section7title1}</h3>
          </div>
          <div className="card-section7">
            <img
              src={
                data.allContentfulHomePage.edges[0].node.section7image2.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
            <h3>{data.allContentfulHomePage.edges[0].node.section7title2}</h3>
          </div>
          <div className="card-section7">
            <img
              src={
                data.allContentfulHomePage.edges[0].node.section7image3.file
                  .url + "?fm=jpg&fl=progressive"
              }
            />
            <h3>{data.allContentfulHomePage.edges[0].node.section7title3}</h3>
          </div>
        </div>
      </div>
      <div className="section-8-main">
        <div className="section-8">
          <h1>
            <i>{data.allContentfulHomePage.edges[0].node.section8title}</i>
          </h1>
          <p>{data.allContentfulHomePage.edges[0].node.section8text}</p>
          <div className="logos">
            {data.allContentfulHomePage.edges[0].node.section8images.map(
              data => (
                <img src={data.file.url + "?fm=jpg&fl=progressive"} />
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
