import { useRouter } from "next/router";

const CategoryPage = () => {
  const { query } = useRouter();
  const slug = query.slug;

  return (
    <div>
      <h1>Halaman Category</h1>
 
      <h3>Daftar Parameter URL:</h3>
      
      <ul>
        {Array.isArray(slug) ? (
          slug.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>Tidak ada parameter</li>
        )}
      </ul>
    </div>
  );
};

export default CategoryPage;
