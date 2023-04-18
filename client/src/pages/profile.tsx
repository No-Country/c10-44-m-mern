import SideBar from "@/components/SideBar";
import styles from "@/styles/Profile.module.css";
import Avatar from "@/assets/Avatar.png";
import { useAppSelector } from "@/store/hooks";

function ProfilePage() {
  const userData = {
    image: Avatar.src,
    name: "Robert",
    surname: "Gomez",
    occupation: "Ingeniero",
    email: "correo@gmail.com",
    number: "+00 346 46 46",
    bio: "Ingeniero",
    country: "Chile",
    product: "Plan Anual",
    expirationDate: "06/04/2024",
  };

  const {
    authList
  } = useAppSelector(rootReducer => rootReducer.auth)

  return (
    <div className={styles.background}>
      <SideBar />
      <section className={styles.info}>
        <h1 className={styles.title}>Mi perfil</h1>
        <div className={styles.alluserdata}>
          <section className={styles.section}>
            <div className={styles.userdetails}>
              <div className={styles.imagebox}>
                <img
                  className={styles.image}
                  src={userData.image}
                  alt="user image"
                />
              </div>
              <div className={styles.shortdescription}>
                <p className={styles.userName}>
                  {authList?.firstName} {authList?.lastName}
                </p>
                <p>{userData.country}</p>
                <p>{userData.occupation}</p>
              </div>
            </div>
            <button className={styles.editbutton}>Editar</button>
          </section>
          <section className={styles.section}>
            <div>
              <p className={styles.userName}>Información Personal</p>
              <div className={styles.container}>
                <div className={styles.column}>
                  <div>
                    <p className={styles.label}>Nombre</p>
                    <p>{authList?.firstName}</p>
                  </div>
                  <div>
                    <p className={styles.label}>Correo Electrónico</p>
                    <p>{authList?.email}</p>
                  </div>
                  <div>
                    <p className={styles.label}>Bio</p>
                    <p>{userData.occupation}</p>
                  </div>
                </div>
                <div className={styles.column}>
                  <div>
                    <p className={styles.label}>Apellido</p>
                    <p>{authList?.lastName}</p>
                  </div>
                  <div>
                    <p className={styles.label}>Teléfono</p>
                    <p>{userData.number}</p>
                  </div>
                  <div>
                    <p className={styles.label}>País</p>
                    <p>{userData.country}</p>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.editbutton}>Editar</button>
          </section>
          <section className={styles.section}>
            <div>
              <p>Producto y método de pago</p>
              <div className={styles.payment}>
                <div>
                  <p className={styles.label}>Producto</p>
                  <p>{userData.product}</p>
                </div>
                <div>
                  <p className={styles.label}>Vence</p>
                  <p>{userData.expirationDate}</p>
                </div>
                <div>
                  <p className={styles.label}>Número de tarjeta</p>
                  <p>numerodsadeadwa</p>
                </div>
              </div>
            </div>
            <button className={styles.editbutton}>Editar</button>
          </section>
        </div>
        <button className={styles.deletebutton}>Eliminar cuenta</button>
      </section>
    </div>
  );
}

export default ProfilePage;
