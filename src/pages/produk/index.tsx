// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import styles from "@/styles/Home.module.css";

// const ProductPage = () => {
//   const { push } = useRouter();

//   useEffect(() => {
//     const isLogin = localStorage.getItem("isLogin");

//     if (!isLogin) {
//       push("/auth/login");
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLogin");
//     push("/auth/login");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.title}>Halaman Produk</h1>
//         <p>Selamat datang di halaman produk.</p>

//         <br />

//         <button
//           className={styles.button}
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

// import TampilanProduk from "../views/produk";

// const halamanProduk = () => {
//   return (
//     <>
//       <TampilanProduk />
//     </>
//   );
// };

// export default halamanProduk;

// import styles from "./Produk.module.css";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// type ProductType =
// {
//   id: string;
//   name: string;
//   price: number;
//   size: string;
//   category: string;
//   image: string;
// }

// const kategori = () => {
//   // const [isLogin, setIsLogin] = useState(false);
//   // const { push } = useRouter();
//   const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //  if (!isLogin) {
//   //    push("/auth/login");
//   //  }
//   // },[]);

//   // fungsi ambil data (dipakai ulang)
//   const fetchProducts = () => {
//     fetch("/api/produk")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.data);
//       })
//       .catch((err) => console.error(err));
//   };

//   // pertama kali load
//   useEffect(() => {
//     fetchProducts();
//   }, []);


//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Daftar Produk</h1>

//       {/* tombol refresh */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <button className={styles.button} onClick={fetchProducts}>
//           Refresh Data
//         </button>
//       </div>
  
//       <div className={styles.grid}>
//         {products.map((product: ProductType) => (
//           <div key={product.id} className={styles.card}>
//             <h2>{product.name}</h2>
//             <p>Harga: Rp {product.price.toLocaleString()}</p>
//             <p>Ukuran: {product.size}</p>
//             <p>Kategori: {product.category}</p>
//             <img src={product.image} alt={product.name} width={200} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default kategori;

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import TampilanProduk from "../views/produk";
// import styles from "./Produk.module.css";
// import useSWR from "swr";

// const kategori = () => {
//   // const [isLogin, setIsLogin] = useState(false);
//   // const { push } = useRouter();
//   const [products, setProducts] = useState([]);
//   // console.log("products:", products);
//   // useEffect(() => {
//   //   if (!isLogin) {
//   //     push("/auth/login");
//   //   }
//   // }, []);

//   // fungsi fetch (bisa dipanggil ulang)
//   const fetchProducts = () => {
//     fetch("/api/produk")
//       .then((response) => response.json())
//       .then((responsedata) => {
//         setProducts(responsedata.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching produk:", error);
//       });
//   };

//   // pertama kali load
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       {/* tombol refresh */}
//       <div style={{ textAlign: "center" }}>
//          <button className={styles.button} onClick={fetchProducts}>
//            Refresh Data
//          </button>
//        </div>
//       <TampilanProduk products={products} />
//     </div>
//   );
// };

// export default kategori;

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import TampilanProduk from "../views/produk";
// import useSWR from "swr";
// import fetcher from "../utils/swr/fetcher";

// // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const kategori = () => {
//   // const [isLogin, setIsLogin] = useState(false);
//   // const { push } = useRouter();
//   const [products, setProducts] = useState([]);
//   // console.log("products:", products); 

//   const { data, error, isLoading } = useSWR("/api/produk", fetcher);
//   //cek apakah data, error, dan isLoading sudah benar
//   // console.log("data:", data);
//   // console.log("error:", error);
//   // console.log("isLoading:", isLoading);

//   return (
//     <div>
//       <TampilanProduk products={isLoading ? [] : data.data} />
//     </div>
//   );
// };

// export default kategori;

// import { useEffect, useState } from "react";
// import TampilanProduk from "../views/produk";

// type ProductType = {
//   id: string;
//   name: string;
//   price: number;
//   size: string;
//   image: string;
//   category: string;
// };

// const kategori = () => {
//   const [products, setProducts] = useState<ProductType[]>([]);

//   useEffect(() => {
//     fetch("/api/produk")
//       .then((response) => response.json())
//       .then((responsedata) => {
//         setProducts(responsedata.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching produk:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <TampilanProduk products={products} />
//     </div>
//   );
// };

// export default kategori;

// import useSWR from "swr";
// import TampilanProduk from "../../views/produk";
// import fetcher from "../../utils/swr/fetcher";

// type ProductType = {
//   id: string;
//   name: string;
//   price: number;
//   size: string;
//   image: string;
//   category: string;
// };

// type ApiResponse = {
//   status: boolean;
//   status_code: number;
//   data: ProductType[];
// };

// const kategori = () => {
//   const { data, error, isLoading } = useSWR<ApiResponse>("/api/produk", fetcher);

//   if (error) {
//     return <p>Terjadi kesalahan saat mengambil data produk.</p>;
//   }

//   return (
//     <div>
//       <TampilanProduk products={isLoading ? [] : data?.data || []} />
//     </div>
//   );
// };

// export default kategori;

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import TampilanProduk from "../../views/produk";
// import useSWR from "swr";
// import fetcher from "../../utils/swr/fetcher";

// // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const kategori = () => {
//   // const [isLogin, setIsLogin] = useState(true);
//   const { push } = useRouter();
//   const [products, setProducts] = useState([]);
//   // console.log("products:", products);

//   const { data, error, isLoading } = useSWR("/api/produk", fetcher);
//   //cek apakah data, error, dan isLoading sudah benar

//   return (
//     <div>
//       <TampilanProduk products={isLoading ? [] : data?.data} />
//     </div>
//   );
// };

// export default kategori;

type ProductType = {
  id: number;
  name: string;
};

const TampilanProduk = ({ products = [] }: { products?: ProductType[] }) => {
  return (
    <div>
      <h1 data-testid="title">Product Page</h1>

      {products?.length > 0 ? (
        products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))
      ) : (
        <p data-testid="empty">No Product</p>
      )}
    </div>
  );
};

export default TampilanProduk;

