export default function HeavyComponent() {
    return (
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid gray' }}>
        <h3>Heavy Component</h3>
        <p>Komponen ini dimuat secara lazy menggunakan dynamic import.</p>
      </div>
    );
  }

  