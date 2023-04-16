import React, { useState } from "react";
import styles from "@/styles/SideBarMobile.module.css";
import {
  BiHomeAlt,
  BiUserCircle,
  BiBookContent,
  BiPencil,
  BiLogOut,
  BiRightArrowAlt,
} from "react-icons/bi";

import Avatar from "../assets/Avatar.png";
import iconV from "../assets/Icon_verbify.png";

function SideBarMobile() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.container_sidebarmobile}>
      <div className={`${styles.menu_mobile} ${showMenu ? "" : styles.hidden}`}>
        <img src={iconV.src} onClick={toggleMenu} />
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
      <div className={styles.icon_RightArrow} onClick={toggleMenu}>
        <BiRightArrowAlt />
      </div>
    </nav>
  );
}

export default SideBarMobile;
