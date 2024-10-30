import { useEffect, useState } from 'react';
import '../styles/components/navbar.sass'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("logo");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("#logo, #look, #shop, #last-season");
      const scrollPos = window.scrollY + 30;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight){
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleClickLink = (event, linkId) => {
    event.preventDefault();
    const element = document.getElementById(linkId);
    element.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <nav id='navbar'>
        <ul className='container'>
          <li>
            <a 
              href="#logo" 
              className={activeLink === "logo" ? "active" : ""} 
              onClick={(event) => handleClickLink(event, "logo")}>
                RUNWAY
            </a>
          </li>
          
          <li>
            <a 
              href="#look" 
              className={activeLink === "look" ? "active" : ""} 
              onClick={(event) => handleClickLink(event, "look")}>
                LOOKBOOK
            </a>
          </li>
          
          <li>
            <a 
              href="#shop" 
              className={activeLink === "shop" ? "active" : ""} 
              onClick={(event) => handleClickLink(event, "shop")}>
                SHOP
              </a>
          </li>

          <li>
            <a 
              href="#last-season" 
              className={activeLink === "last-season" ? "active" : ""} 
              onClick={(event) => handleClickLink(event, "last-season")}>
                LAST SEASON
              </a>
          </li>
          
        </ul>
    </nav>
  )
}

export default NavBar;