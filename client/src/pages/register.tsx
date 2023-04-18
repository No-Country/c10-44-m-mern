import Link from "next/link";
//Estilos Css
import styles from "@/styles/Register.module.css";
//React
import React, { useState } from "react";
import { useForm } from "react-hook-form";

//Iconos
import { FcGoogle } from "react-icons/fc";
import { BiLowVision, BiShow } from "react-icons/bi";

//Recursos
import Verbify from "../assets/Verbify.png";
import img_register from "../assets/img_register.png";

//Axios
import axios from "axios";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data: RegisterFormData) => {
    const url = "http://localhost:8080/api/users";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className={styles.container_register}>
      <section className={styles.container_img}>
        <img src={img_register.src} alt={img_register.src} />
      </section>
      <section className={styles.container_form}>
        <section>
          <img src={Verbify.src} />
          <p>Regístrate en nuestra grandiosa comunidad</p>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input
              {...register("email")}
              type="email"
              placeholder="Correo electrónico"
              required
            />

            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              required
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
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
              required
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
            <button className={styles.button_createAccount} type="submit">
              Crear cuenta
            </button>
          </form>
          <div className={styles.termsandconditions}>
            <p>
              Al hacer clic en "Crear cuenta" certifico que tengo 16 años o más
              y acepto las Condiciones de Uso, la Política de Privacidad, la
              Política de Cookies y recibir novedades y promociones.
            </p>
          </div>
          <div className={styles.register_with_google}>
            <button>
              <FcGoogle size={32} />
              Regístrate con Google
            </button>
          </div>
          <div className={styles.login_sesion}>
            ¿Ya tienes una cuenta?
            <Link href="/login">
              <button>Inicia sesión</button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Register;
