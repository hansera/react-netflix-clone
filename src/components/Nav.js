import React, { useState } from "react";
import "./Nav.css"

export default function Nav() {
  const [show, setShow] = useState(false);
  return (
    <nav className="nav">
  <img 
    alt="Netflix logo" 
    src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
    className="nav_logo"
    onClick={() => window.location.reload()}   
    />
    <img
    alt="User logged"
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    className="nav_avatar"
    />
    </nav>
    );
}
