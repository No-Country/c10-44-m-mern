import React, { useState } from "react";
import styles from "@/styles/SideBarMobile.module.css";
import {
  BiHomeAlt,
  BiUserCircle,
  BiBookContent,
  BiPencil,
  BiLogOut,
  BiMenu,
} from "react-icons/bi";
import Avatar from "../assets/Avatar.png";
import VerbifyLogo from "../assets/Verbify-logo.png";
import iconV from "../assets/Icon_verbify.png";

function SideBarMobile() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.container_sidebarmobile}>
      <div onClick={toggleMenu}>
        {showMenu ? (
          <>
            <div className={styles.menu_mobile}>
              <img src={iconV.src} />
              <p>Menu</p>
              <hr />
              <button>
                <BiHomeAlt size={28} />
              </button>
              <button>
                <BiUserCircle size={28} />
              </button>
              <button>
                <BiBookContent size={28} />
              </button>
              <button>
                <BiPencil size={28} />
              </button>
              <hr />
              <img src={Avatar.src} />
              <button>
                <BiLogOut size={28} />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.icon_sandwich}>
              <BiMenu />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default SideBarMobile;
