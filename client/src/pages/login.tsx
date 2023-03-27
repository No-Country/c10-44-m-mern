import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <main>
      <section className="">
        <h1 className="">Verbify</h1>
        <h4 className="">Login to continue your reservation</h4>
      </section>
      <form>
        <input type="text" placeholder="email" className="" />
        <input type="text" placeholder="label" className="" />
        <Link href="/¿forgotten-password?" />
        <button type="submit">Log in</button>
      </form>
      <section className="">
        <p>Or Log in using Google</p>
        <button>
          {/* <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google login"
            width="15"
            height="15"
          /> */}
          Log in with Google
        </button>
      </section>
      <section>
        <p className="">
          Don't have an account?{" "}
          <Link className="" href="/register">
            Sign up for free
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
