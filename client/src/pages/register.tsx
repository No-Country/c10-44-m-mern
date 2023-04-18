import Link from "next/link";
//Estilos Css
import styles from "@/styles/Register.module.css";

//Iconos

import React, { useCallback, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiLowVision, BiShow } from "react-icons/bi";

//Recursos
import Verbify from "../assets/Verbify.png";
import img_register from "../assets/img_register.png";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signUpUser } from "@/actions/authActions";
import { useRouter } from "next/router";


function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useRouter();

  const { authList, authToken } = useAppSelector(rootReducer => rootReducer.auth)

  useEffect(() => {
    if (authList && authToken) {
      // TO DO check where this should route...
      navigate.push('/myprogress');
    }
  });

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

  const dispatch = useAppDispatch();

  const fetchSignUp = useCallback(() => {
    const user = {
      email: inputs.email,
      password: inputs.password,
      displayName: inputs.email.split('@')[0]
    };
    inputs.password === inputs.confirmPassword && dispatch(signUpUser(user));
  }, [dispatch, inputs]);

  const handleClickSingUp = (event: React.MouseEvent) => {
    event.preventDefault();
    fetchSignUp();

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
            <button
              onClick={handleClickSingUp}
              className={styles.container_termsandconditions}
            >
              Crear cuenta
            </button>
            <p className={styles.termsandconditions}>
              Al hacer click en "Crear cuenta" certifico que tengo 16 años o más
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
