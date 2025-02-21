import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProductById } from '../../services/api';
import ProductGallery from '../../components/website/ui/ProductGallery/ProductGallery';
import styles from './ProductPage.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const fetchedProduct = await fetchProductById(id);
      setProduct(fetchedProduct);
    };

    loadProduct();
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className={styles.productPage}>
      <h1>{product.name}</h1>
      <ProductGallery images={product.images} />
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>${product.price}</p>
      <button className={styles.addToCartButton}>Añadir al carrito</button>
    </div>
  );
};

export default ProductPage;
