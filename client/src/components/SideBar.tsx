import React, { useState } from 'react';
import styles from '@/styles/SideBar.module.css';
import { BiRightArrowAlt, BiHomeAlt, BiUserCircle, BiBookContent, BiPencil, BiLogOut, BiArrowBack } from 'react-icons/bi';
import Avatar from '../assets/Avatar.png';
import VerbifyLogo from '../assets/Verbify-logo.png';

function SideBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  };

  return (
    <div> {!open ?
      <nav className={styles.nav}>
        <span>
          <div>
            <button onClick={handleClick} className={styles.button_2}><BiRightArrowAlt size={28} /></button>
            <p>Menu</p>
          </div>
          <hr />
          <div>
            <button><BiHomeAlt size={28} /></button>
            <button><BiUserCircle size={28} /></button>
            <button><BiBookContent size={28} /></button>
            <button><BiPencil size={28} /></button>
          </div>
          <hr />
        </span>
        <div>
          <img src={Avatar.src} />
          <button><BiLogOut size={28} /></button>
        </div>
      </nav> :
      <nav className={styles.nav_2}>
        <span>
          <div>
            <div>
              <img src={VerbifyLogo.src} />
              <button onClick={handleClick} className={styles.button_3}>
                <BiArrowBack size={28} />
              </button>
            </div>
            <p>Menu</p>
          </div>
          <hr />
          <div>
            <button><BiHomeAlt size={28} /><p>Home</p></button>
            <button><BiUserCircle size={28} /><p>Perfil</p></button>
            <button><BiBookContent size={28} /><p>Cursos</p></button>
            <button><BiPencil size={28} /><p>Classroom</p></button>
          </div>
          <hr />
        </span>
        <section>
          <div>
            <img src={Avatar.src} />
            <div>
              <h5>Robert.GM</h5>
              <p>correo@email.com</p>
            </div>
          </div>
          <button>
            <BiLogOut size={28} />
            <p>Cerrar sesión</p>
          </button>
        </section>
      </nav>}
    </div>
  )
}

export default SideBar;
