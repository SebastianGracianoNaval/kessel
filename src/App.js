import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [clientes, setClientes] = useState([]); // Estado para almacenar los clientes

  useEffect(() => {
    // Función para obtener los clientes desde el backend
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/clientes'); // Cambia la URL si es necesario
        setClientes(response.data); // Actualiza el estado con los datos recibidos
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
      }
    };

    fetchClientes();
  }, []); // El array vacío asegura que esto se ejecute solo una vez al cargar el componente

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clientes</h1>
        {clientes.length > 0 ? (
          <ul>
            {clientes.map((cliente) => (
              <li key={cliente.id_cliente}>
                {cliente.nombre} {cliente.apellido} - {cliente.correoElectronico}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay clientes disponibles.</p>
        )}
      </header>
    </div>
  );
}

export default App;