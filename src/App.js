import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const { useState, useEffect, useCallback } = require("react");

function App() {

  const [paleta, setPaleta] = useState([]);
  const [count, setCount] = useState(4);

  const generarPaleta = useCallback(() => {
    let paleta = [];

    for (let i = 0; i < count; i++) {
      let color = generarColor();
      // check if color is already in the array
      if (paleta.includes(color)) {
        console.log(color + ' is already in the array');
        i--;
      } else {
        paleta.push(color);
      }
    }
    setPaleta(paleta);
  }, [count]);

  function generarColor() {
    let color = '#';
    let letras = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    generarPaleta();
  }, [generarPaleta]);






  return (
    <div className="container mt-5">
      <h1>Generador de colores</h1>
      <div className="row mt-5">
        {
          paleta.map((color, index) => {
            return (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className='color-card' style={{ backgroundColor: color }}>
                    </div>
                    <p className="card-text mt-3 text-center">{color}</p>
                  </div>
                </div>
              </div>
            )
          })
        }

        <div className="col-md-12 text-center">
          <input type="number" className="form-control" value={count} onChange={(e) => setCount(e.target.value)} />
          <button className="btn btn-primary mt-5" onClick={generarPaleta}>Generar paleta</button>
        </div>
      </div>

    </div>
  );
}

export default App;
