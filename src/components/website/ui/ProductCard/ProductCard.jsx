import styles from './ProductCard.module.css';

const ProductCard = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Si no se pasa onClick, redirigir directamente al producto
      // Suponiendo que product.id está definido
      // Asumiendo que la navegación a producto se hace con  `/product/${product.id}`
      // Verifica y ajusta la ruta según tu enrutamiento
      // navigate(`/product/${product.id}`); // Asegúrate de tener useNavigate importado si lo usas aquí
    }
  };

  // Suponiendo que el objeto product tiene una propiedad 'color' para el ejemplo
  const productColor = product.color || 'black'; // Color por defecto si no hay color definido
  const productImage = product.images?.[0] || 'https://via.placeholder.com/200';

  return (
    <div className={styles.productCard} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img src={productImage} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.details}>
      <div className={styles.colorBox} style={{ backgroundColor: productColor }}></div>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;