import React, { useEffect, useState } from "react";
import "./Nav.css"
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSerchValue] = useState("");
  const navigate = useNavigate ();
  
  useEffect(() => {
      window.addEventListener("scroll" , () => {
        console.log('window.scrollY', window.scrollY);
        if (window.scrollY > 50) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
      return () => {
        window.removeEventListener("scroll", () => {});
      };
  }, []);

  const handleChange = (e) => {
    setSerchValue(e.target.value);
    navigate(`/serch?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav_black"} `}>
  <img 
    alt="Netflix logo" 
    src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
    className="nav_logo"
    onClick={() => (window.location.href = "/")}   
    />

  <input 
    value={searchValue} 
    onChange={handleChange} 
    className="nav__input" 
    type ="text"
    placeholder="영화를 검색해주세요."
    />

    <img
    alt="User logged"
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    className="nav_avatar"
    />
    </nav>
    );
}
