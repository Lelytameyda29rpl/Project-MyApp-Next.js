// import HeroSection from "./HeroSection";
// import MainSection from "./MainSection";

// const TampilanProduk = () => {
//   return (
//     <>
//       <HeroSection />
//       <MainSection />
//     </>
//   );
// };

// export default TampilanProduk;

// import styles from "../../produk/Produk.module.css";
// type ProductType = {
//   id: string;
//   name: string;
//   price: number;
//   size: string;
//   image: string;
//   category: string;
// };

// const TampilanProduk = ({ products }: { products: ProductType[] }) => {
//   return (
//     <div className={styles.container}>
//     <h1 className={styles.title}>Daftar Produk</h1>
//     <div className={styles.grid}>
//         {products.map((products: ProductType) => (
//           <div key={products.id} className={styles.card}>
//             <h2>{products.name}</h2>
//             <p>Harga: Rp {products.price.toLocaleString()}</p>
//             <p>Ukuran: {products.size}</p>
//             <p>Kategori: {products.category}</p>
//             <img src={products.image} alt={products.name} width={200} />
//           </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default TampilanProduk;

import styles from "../../pages/produk/produk.module.scss";
import Link from "next/link";
import Image from "next/image";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {products?.length > 0 ? (
          products?.map((product: ProductType) => (
            <Link
              href={`/produk/${product.id}`}
              key={product.id}
              className={styles.produk__content__item}
            >
              <div>
                <div className={styles.produk__content__item__image}>
                  <Image src={product.image} alt={product.name} width={200} height={200} />
                </div>
                <h4 className={styles.produk__content__item__name}>
                  {product.name}
                </h4>
                <p className={styles.produk__content__item__category}>
                  {product.category}
                </p>
                <p className={styles.produk__content__item__size}>
                  {product.size}
                </p>
                <p className={styles.produk__content__item__price}>
                  Rp {product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))
        ) : (
          [1, 2, 3, 4].map((item) => (
            <div key={item} className={styles.produk__content__skeleton}>
              <div className={styles.produk__content__skeleton__image}></div>
              <div className={styles.produk__content__skeleton__name}></div>
              <div className={styles.produk__content__skeleton__category}></div>
              <div className={styles.produk__content__skeleton__size}></div>
              <div className={styles.produk__content__skeleton__price}></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;
