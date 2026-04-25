import { useRouter } from "next/router";
import styles from '@/styles/Home.module.css'

export default function BlogDetail() {
  const { query } = useRouter();

  return (
    <div className={styles.container}>
      <h1>Halaman Blog</h1>
      <p>Slug: {query.slug}</p>
      <br />
    </div>
  );
}