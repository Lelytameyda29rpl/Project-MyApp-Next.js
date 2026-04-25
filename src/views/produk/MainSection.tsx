import styles from "./produk.module.css";

const MainSection = () => {
    return (
      <div className="flex justify-center gap-6 p-10 bg-gray-100">
  
        <div className="bg-white p-6 rounded-lg shadow-md w-56 text-center">
          <h3 className="text-xl font-bold mb-2">Produk 1</h3>
          <p className="text-gray-600">Deskripsi produk</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Beli
          </button>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-md w-56 text-center">
          <h3 className="text-xl font-bold mb-2">Produk 2</h3>
          <p className="text-gray-600">Deskripsi produk</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Beli
          </button>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-md w-56 text-center">
          <h3 className="text-xl font-bold mb-2">Produk 3</h3>
          <p className="text-gray-600">Deskripsi produk</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Beli
          </button>
        </div>
  
      </div>
    );
  };
  
  export default MainSection;
