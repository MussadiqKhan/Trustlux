import React, { useState } from "react"
import "../styles/header.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import logo from "../../static/images/logo.png"

const Header = () => {
  const [drop, setDrop] = useState(false)

  const onClick = () => {
    console.log("onClick")
    setDrop(!drop)
    console.log(drop)
  }
  return (
    <div className="header">
      <Helmet>
        <script src="https://embed.typeform.com/embed.js"></script>
        <title>Trustlux</title>
      </Helmet>
      <nav>
        <div className="toggle">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" width="100" alt="logo" />
            </div>
          </Link>
          <div className="menu" id="menu">
            <GiHamburgerMenu onClick={onClick} />
          </div>
        </div>
        <Link to="/">
          <div className="logo_large">
            <img src={logo} alt="logo" width="100" />
          </div>
        </Link>
        <ul id="UL" className={drop ? "active" : ""}>
          <Link to="/shoppers">
            <li>Shoppers</li>
          </Link>
          <Link to="/merchants">
            <li>Merchants</li>
          </Link>
          <Link to="/brands">
            <li>Brands</li>
          </Link>
          <a
            class="typeform-share button btn btn-normal rounded-50 mt-20 get-started mobile"
            href="https://trustlux.typeform.com/to/K0Jg7M"
            data-mode="popup"
            style={{ margin: "0 auto", marginBottom: "30px" }}
          >
            Get started
          </a>
        </ul>
        <a
          class="typeform-share button btn btn-normal rounded-50 mt-20 get-started main"
          href="https://trustlux.typeform.com/to/K0Jg7M"
          data-mode="popup"
        >
          Get started
        </a>
      </nav>
    </div>
  )
}

export default Header
