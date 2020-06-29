import React from "react"
import { Link } from "gatsby"
import "../styles/footer.css"
import stamp from "../../static/images/stamp.svg"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="pages">
          <Link to="/shoppers">
            <p style={{ color: "#47474c" }}>SHOPPERS</p>
          </Link>
          <Link to="/merchants">
            <p style={{ color: "#47474c" }}>MERCHANTS</p>
          </Link>
          <Link to="/brands">
            <p style={{ color: "#47474c" }}>BRANDS</p>
          </Link>
        </div>
        <div className="svg">
          <div className="hr">
            <hr />
          </div>
          <svg
            class="footer-icon"
            width="40"
            height="40"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="35"
            >
              <path
                d="M0 0.0732422H34.9987V34.9988H0V0.0732422Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)">
              <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4994 34.3751C8.19483 34.3751 0.624948 26.8211 0.624948 17.536C0.624948 8.25089 8.19483 0.696958 17.4994 0.696958C26.804 0.696958 34.3737 8.25089 34.3737 17.536C34.3737 26.8211 26.804 34.3751 17.4994 34.3751ZM17.4994 0.0732422C7.85025 0.0732422 0 7.90703 0 17.536C0 27.165 7.85025 34.9988 17.4994 34.9988C27.1486 34.9988 34.9987 27.165 34.9987 17.536C34.9987 7.90703 27.1486 0.0732422 17.4994 0.0732422Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.86753 15.8921C9.6822 15.7399 9.36062 15.7064 9.18269 15.7819C9.0104 15.8525 8.73237 15.9563 8.37725 16.4173C8.37717 16.4181 8.37717 16.419 8.37725 16.4198V16.4222C8.3752 16.424 8.37344 16.426 8.3719 16.4282C8.36802 16.4332 8.36385 16.4396 8.35711 16.448L8.29377 16.5359L8.25833 16.5843C8.23432 16.6195 8.21067 16.6548 8.18768 16.693V16.6838C8.00338 16.9415 7.71818 17.3439 7.4731 17.7075C7.4723 17.7086 7.47157 17.7098 7.47105 17.711C7.37865 17.848 7.29159 17.9793 7.21837 18.0951C7.02989 18.3602 6.75429 18.7043 6.45195 18.9381C6.34629 19.0215 6.2298 19.0902 6.10561 19.1421C6.05524 19.1623 6.00296 19.1777 5.94958 19.1879C5.92556 19.1915 5.90133 19.1933 5.87709 19.1932C5.71966 19.1932 5.59409 19.1579 5.49538 19.0926C5.33056 18.9793 5.2506 18.7729 5.2506 18.4756V15.8839H6.22336L6.25879 15.7427H5.24702V14.5086L4.18977 14.6851V15.7407H3.74121L3.76677 15.8843H4.19123V18.5021C4.19123 19.4552 4.5364 19.7541 5.12576 19.7895C5.21736 19.8012 5.31028 19.7993 5.40129 19.7838H5.4062C5.52065 19.7692 5.63238 19.7389 5.73841 19.6938C5.74654 19.6905 5.75576 19.6874 5.76462 19.6832C6.13073 19.5375 6.61568 19.2088 7.119 18.4879V19.794H8.18584V16.9302C8.49894 16.4244 8.84594 16.3397 8.84594 16.4325C8.84931 16.5915 8.91967 16.7417 9.03976 16.8462C9.31207 17.0649 9.7104 17.0219 9.92955 16.7502C10.1373 16.4927 10.1108 16.1189 9.86899 15.8932L9.86753 15.8921ZM8.18445 15.7399V16.4382C7.89581 16.8412 7.3599 17.6006 7.11761 18.0068V15.7399H8.18445ZM13.0204 15.7452V18.6327C12.8435 18.9702 12.5212 19.1816 12.2846 19.1816C11.794 19.1816 11.574 18.9535 11.574 18.4809V15.7456H10.5251V18.506C10.5251 19.5191 10.9227 19.7975 11.5909 19.7975C12.1154 19.7975 12.8173 19.3673 13.0204 18.8861V19.7975H14.0776V15.7456L13.0204 15.7452ZM16.9665 17.5349C17.7196 17.9991 17.9733 18.735 17.5502 19.3411C17.5502 19.3411 17.229 19.7969 16.3659 19.7969C15.3425 19.7969 14.835 19.4086 14.835 19.4086V18.3453H14.9789C15.1059 18.6743 15.3765 19.6536 16.3659 19.6536C16.9673 19.6536 17.0681 18.8939 16.4253 18.4718L15.5711 17.9567C14.7505 17.4586 14.5308 16.7752 14.9955 16.1674C14.9955 16.1674 15.3171 15.7438 16.1629 15.7438C17.1353 15.7438 17.5583 15.9972 17.5583 15.9972V16.9426H17.4144C17.3047 16.6471 17.0337 15.8875 16.1629 15.8875C15.6128 15.8875 15.3759 16.5373 16.1119 17.0015L16.9665 17.5349ZM22.5021 13.46H21.449V17.9267L22.5017 16.3601L22.5021 13.46ZM22.5021 16.8914V19.7923H21.449V18.4273C20.773 19.2391 20.292 19.5441 20.0497 19.655L20.0167 19.6691C19.8474 19.7519 19.6614 19.7957 19.4728 19.7972C18.807 19.7972 18.4116 19.5279 18.4116 18.5095V15.9009H17.9895L17.964 15.7575H18.4116V14.7056L19.4653 14.5292V15.7579H20.4681L20.4345 15.9013H19.4653V18.4845C19.4653 18.9455 19.6598 19.1905 20.0623 19.1985C20.1413 19.1958 20.2195 19.1825 20.2947 19.159C20.2947 19.159 20.2969 19.159 20.2991 19.1569C20.4367 19.1105 20.5665 19.0436 20.6843 18.9585C21.1194 18.6546 21.4497 18.1724 21.4497 18.1724C21.4851 18.1296 21.5148 18.0909 21.5392 18.0573L22.3302 16.8744C22.3822 16.7912 22.5025 16.6171 22.5025 16.6171L22.5021 16.8914ZM26.9364 15.7456V19.7975H25.8791V18.8858C25.6765 19.3669 24.9743 19.7972 24.4497 19.7972C23.7815 19.7972 23.384 19.5187 23.384 18.5057V15.7452H24.4327V18.4802C24.4327 18.9528 24.6528 19.1809 25.1434 19.1809C25.3804 19.1809 25.7016 18.9691 25.8791 18.632V15.7452L26.9364 15.7456ZM29.6697 17.3859L30.8763 15.7456H30.64L29.5636 17.2102L28.6015 15.7456H27.3949L28.9442 18.0513L27.6584 19.7975H27.8951L29.0529 18.2254L30.0854 19.7975H31.2584L29.6697 17.3859Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.63406 10.0987C9.70157 10.1639 9.79017 10.1997 9.88375 10.1997C9.9815 10.1997 10.0729 10.1611 10.1411 10.0911C10.2064 10.0239 10.2424 9.93537 10.2424 9.84169C10.2422 9.74378 10.2034 9.65266 10.1333 9.58493L8.86231 8.35481C8.7948 8.28964 8.70612 8.25391 8.61262 8.25391H8.61255C8.5148 8.25391 8.42342 8.29249 8.35517 8.36241C8.28993 8.42964 8.25391 8.51812 8.25391 8.61172C8.25405 8.70832 8.29381 8.80185 8.36308 8.86863L9.63406 10.0987Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0848 7.66178C13.1415 7.79286 13.2708 7.87762 13.4141 7.87762C13.4633 7.87762 13.5112 7.86768 13.5564 7.84817C13.6877 7.79155 13.7727 7.66265 13.7727 7.51966C13.7727 7.47085 13.7629 7.42321 13.7434 7.37805L12.6234 4.79265C12.5665 4.66149 12.4373 4.57666 12.2943 4.57666C12.2451 4.57666 12.1971 4.5866 12.1518 4.60633C12.0205 4.66281 11.9355 4.79185 11.9355 4.93484C11.9355 4.98358 11.9454 5.03115 11.9648 5.07638L13.0848 7.66178Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.208 6.72732C17.211 6.92168 17.3717 7.07973 17.5664 7.07973H17.5735L17.5764 7.07951C17.7689 7.07425 17.925 6.91481 17.9252 6.7222V6.71504L17.925 6.71256L17.8979 4.94853C17.8949 4.75431 17.7341 4.59619 17.5394 4.59619H17.5323L17.5295 4.59634C17.3369 4.60167 17.1808 4.76103 17.1807 4.95372V4.96081L17.1808 4.96329L17.208 6.72732Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5763 7.90316C21.6182 7.91989 21.6627 7.92844 21.7082 7.92844C21.8563 7.92844 21.9872 7.83966 22.0416 7.70222L23.0818 5.08402C23.0985 5.04215 23.107 4.99765 23.107 4.95228C23.107 4.80446 23.018 4.67381 22.8804 4.61952C22.8382 4.60279 22.7938 4.59424 22.7485 4.59424C22.6004 4.59424 22.4695 4.68302 22.415 4.82039L21.3749 7.43866C21.3582 7.48075 21.3496 7.5251 21.3496 7.57033C21.3496 7.71822 21.4386 7.84887 21.5763 7.90316Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.2092 10.2943C25.3069 10.2943 25.3983 10.2557 25.4665 10.1857L26.6994 8.9169C26.7648 8.84989 26.8006 8.76141 26.8006 8.66766C26.8005 8.56975 26.7617 8.47863 26.6917 8.41089C26.6242 8.34579 26.5356 8.31006 26.4421 8.31006H26.4421C26.3443 8.31006 26.2529 8.34857 26.1848 8.41857L24.9518 9.68726C24.8865 9.75434 24.8506 9.84297 24.8506 9.93657C24.8507 10.0344 24.8895 10.1255 24.9595 10.1933C25.0271 10.2584 25.1157 10.2943 25.2092 10.2943Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.1361 26.7169C26.2036 26.7822 26.2923 26.818 26.3858 26.818C26.4835 26.818 26.5748 26.7793 26.6431 26.7093C26.7084 26.642 26.7444 26.5535 26.7444 26.4599C26.7442 26.362 26.7055 26.2709 26.6354 26.2032L25.3643 24.973C25.2969 24.9079 25.2082 24.8721 25.1146 24.8721H25.1146C25.0169 24.8721 24.9255 24.9106 24.8573 24.9805C24.792 25.0479 24.7559 25.1364 24.7559 25.23C24.7561 25.3279 24.7949 25.419 24.865 25.4868L26.1361 26.7169Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.3748 30.2794C22.4316 30.4106 22.5609 30.4954 22.7042 30.4954C22.7532 30.4954 22.801 30.4855 22.8462 30.466C22.9777 30.4093 23.0627 30.2803 23.0627 30.1373C23.0627 30.0882 23.0528 30.0404 23.0332 29.9953L21.9134 27.4104C21.8566 27.2792 21.7274 27.1943 21.5843 27.1943C21.535 27.1943 21.4871 27.2043 21.4417 27.2241C21.3105 27.2806 21.2256 27.4097 21.2256 27.5526C21.2256 27.6018 21.2355 27.6496 21.2551 27.6946L22.3748 30.2794Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.1004 30.1233C17.1034 30.3177 17.2641 30.4758 17.4588 30.4758H17.4682L17.4713 30.4754C17.6628 30.4689 17.8174 30.31 17.8176 30.1182V30.111L17.8174 30.1086L17.7904 28.3445C17.7874 28.1502 17.6267 27.9922 17.432 27.9922H17.4249L17.4221 27.9923C17.2294 27.9976 17.0734 28.157 17.0732 28.3497V28.3566L17.0734 28.3591L17.1004 30.1233Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1183 30.452C12.1601 30.4686 12.2047 30.4772 12.2502 30.4772C12.3983 30.4772 12.5292 30.3884 12.5836 30.251L13.6237 27.6328C13.6404 27.5907 13.6489 27.5463 13.6489 27.501C13.6489 27.3532 13.56 27.2226 13.4223 27.1683C13.3801 27.1515 13.3356 27.1431 13.2904 27.1431C13.1422 27.1431 13.0114 27.2318 12.9569 27.3692L11.9169 29.9875C11.9002 30.0294 11.8916 30.0737 11.8916 30.1192C11.8916 30.267 11.9806 30.3977 12.1183 30.452Z"
                fill="#D8D8D8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.55591 26.7616C8.65358 26.7616 8.74496 26.723 8.81321 26.6529L10.0463 25.3843C10.1114 25.317 10.1475 25.2285 10.1475 25.1349C10.1472 25.037 10.1085 24.9458 10.0384 24.8781C9.97099 24.8131 9.88232 24.7773 9.78881 24.7773C9.69099 24.7773 9.59968 24.8159 9.53151 24.8858L8.29846 26.1545C8.23329 26.2215 8.19727 26.3102 8.19727 26.4039C8.19741 26.5017 8.23615 26.5927 8.30622 26.6605C8.37373 26.7257 8.4624 26.7616 8.55591 26.7616Z"
                fill="#D8D8D8"
              />
            </g>
          </svg>
          <div className="hr">
            <hr />
          </div>
        </div>
        <div className="linked">
          {" "}
          <a href="https://www.linkedin.com/company/trustlux" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50.117"
              viewBox="0 0 430.117 430.117"
              width="50.117"
              class="MarketingContact-socialIconMedia"
            >
              <path d="M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z"></path>
            </svg>
          </a>
        </div>
        <div className="copy-right">
          <p>Copyright © 2019 - 2020 Trustlux. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
