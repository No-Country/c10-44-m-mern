import Link from 'next/link';
import styles from '@/styles/Login.module.css';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

function Login() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <section className={styles.main}>
        <section className={styles.section}>
          <section>
            <h1 className={styles.title}>Verbify</h1>
            <p className={styles.p}>Login to continue your reservation</p>
          </section>
          <form method="post" className={styles.form}>
            <input type="text" name="email" onChange={handleChange} placeholder="Email" className={styles.input} />
            <input type={showPassword ? "text" : "password"} name="password" onChange={handleChange} placeholder="Password" className={styles.input} />
            <div className={styles.buttondiv}>
              <button
                className={styles.button3}
                type="button"
                onClick={handleClickShowPassword}
              >
                <span>{showPassword ? <BsEyeSlash size={28} /> : <BsEye size={28} />}</span>
              </button>
            </div>
            <Link className={styles.link} href="/">Forgot your password?</Link>
            <button type="submit" className={styles.button}>Log in</button>
          </form>
          <section className={styles.section2}>
            <div className={styles.line}>
              <div className={styles.line2} />
              <div>
                <p className={styles.or}>or</p>
              </div>
              <div className={styles.line2} />
            </div>
            <p className={styles.h1}>Or use Google</p>
            <button className={styles.button2}>
              <FcGoogle size={28} /><p className={styles.p2}>Log in with Google</p>
            </button>
          </section>
          <section className={styles.link2}>
            <p className={styles.p1}>
              Don't have an account?{" "}
              <Link className={styles.link} href="/register">
                Sign up for free
              </Link>
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Login;
