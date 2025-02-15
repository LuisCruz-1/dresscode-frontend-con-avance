import styles from './WebsiteFooter.module.css';

const WebsiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Bloque izquierdo: Logo, año y copyright */}
        <div className={styles.leftBlock}>
          <span className={styles.logo}>Dresscode</span>
          <span className={styles.copy}>&copy; {new Date().getFullYear()} Dresscode. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
