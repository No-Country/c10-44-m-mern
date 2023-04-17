import Link from "next/link";
import styles from "@/styles/Register.module.css";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiLowVision, BiShow } from "react-icons/bi";
import Verbify from "../assets/Verbify.png";
import Image from "next/image";
import img_register from "../assets/img_register.png";
function Register() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <main className={styles.container_register}>
      <section className={styles.container_img}>
        <Image src={img_register} alt="Imagen de registro" />{" "}
      </section>
      <section className={styles.container_form}>
        <section>
          <img src={Verbify.src} />
          <p>Regístrate en nuestra grandiosa comunidad</p>

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
                    <BiLowVision size={28} />
                  ) : (
                    <BiShow size={28} />
                  )}
                </span>
              </button>
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirmar contraseña"
            />
            <div>
              <button type="button" onClick={handleClickShowConfirmPassword}>
                <span>
                  {showConfirmPassword ? (
                    <BiLowVision size={28} />
                  ) : (
                    <BiShow size={28} />
                  )}
                </span>
              </button>
            </div>
            <button
              type="submit"
              className={styles.container_termsandconditions}
            >
              Crear cuenta
            </button>
            <p className={styles.termsandconditions}>
              Al hacer clic en "Crear cuenta" certifico que tengo 16 años o más
              y acepto las Condiciones de Uso, la Política de Privacidad, la
              Política de Cookies y recibir novedades y promociones.
            </p>
          </form>
          <div className={styles.init_google}>
            <button>
              <FcGoogle size={28} />
              <p>Registrarme con Google</p>
            </button>
          </div>
          <span>
            <p>
              ¿Ya tienes una cuenta?
              <Link className={styles.link_login} href="/login">
                Entrar
              </Link>
            </p>
          </span>
        </section>
      </section>
    </main>
  );
}

export default Register;
