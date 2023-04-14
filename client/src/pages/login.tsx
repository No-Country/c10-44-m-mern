import Link from "next/link";
import styles from "@/styles/Login.module.css";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Verbify from "../assets/Verbify.png";
import ResponsiveLogin from "@/components/ResponsiveLogin";

function Login() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [width, setWidth] = React.useState(0);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width > 0 ? (
    width < breakpoint ? (
      <ResponsiveLogin />
    ) : (
      <main className={styles.main}>
        <section className={styles.section}>
          <section>
            <section>
              <img src={Verbify.src} />
              <p>Iniciar sesión para ver más contenido</p>
            </section>
            <form method="post" className={styles.form}>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Correo electrónico"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                placeholder="Contraseña"
              />
              <div>
                <button type="button" onClick={handleClickShowPassword}>
                  <span>
                    {showPassword ? (
                      <BsEyeSlash size={28} />
                    ) : (
                      <BsEye size={28} />
                    )}
                  </span>
                </button>
              </div>
              <Link className={styles.link} href="/">
                ¿Has olvidado tu contraseña?
              </Link>
              <button type="submit" className={styles.button}>
                Iniciar sesión
              </button>
            </form>
            <div className={styles.div}>
              <div>
                <div />
                <span>
                  <p>ó</p>
                </span>
                <div />
              </div>
              <button>
                <FcGoogle size={28} />
                <p>Iniciar con Google</p>
              </button>
            </div>
            <span>
              <p className={styles.p}>
                ¿No tienes una cuenta?
                <Link className={styles.link_2} href="/register">
                  Registrate aquí
                </Link>
              </p>
            </span>
          </section>
        </section>
      </main>
    )
  ) : (
    <div className={styles.div}>Cargando...</div>
  );
}

export default Login;
