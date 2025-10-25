import * as React from "react"
import logo from "./logo.jpg"; // adjust path as needed

const Logo = () => (
   <img
    src={logo}
    alt="Art Portfolio Logo"
    style={{
      width: "50px",
      height: "50px",
      objectFit: "contain",
    }}
  />
)

export default Logo