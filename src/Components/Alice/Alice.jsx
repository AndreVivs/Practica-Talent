import React, { useState, useEffect, Fragment } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'
import BotonHomePage from '../GeneralComponents/BotonHomePage';


const Alice = () => {
   
        const [minutos, setMinutos] = useState([]);
  const [paises, setPaises] = useState([]);

  const data = {
    labels: paises,
    datasets:[{ 
      label: "Minutos",
    BackgroundColor: "#FFF000",
    borderColor: "blue",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,0,0,2)",
    hoverBorderColor: "#FFF000",
    data: minutos
  }]
  }
  const opciones ={
    maintainAspectRadio: false,
    responsive: true
  }

  const peticionApi = async () =>{
    await axios.get('https://rhisco-89b36-default-rtdb.firebaseio.com/product.json')
    .then(response =>{
      var respuesta = response.data;
      console.log(respuesta)
      var auxMinutos = [], auxPaises = [];
      respuesta.map(elemento =>{
        auxMinutos.push(elemento.minutos);
        auxPaises.push(elemento.paises);
      })
      setMinutos(auxMinutos);
      setPaises(auxPaises);
    })
  }

  useEffect(()=>{
    peticionApi();
  },[])

  return ( 
        <Fragment>
            <BotonHomePage />
            <h2>Paises donde mas se utilizan redes sociales</h2>
            <div className="App" style={{width:"45%", height: "500px"}}>
            <Bar data={data} options={opciones} />
            </div>
           
        </Fragment>
     );
}
 
export default Alice;