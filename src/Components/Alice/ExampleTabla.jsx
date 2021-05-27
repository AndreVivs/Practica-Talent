import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import axios from 'axios'


const baseUrl= "https://rhisco-89b36-default-rtdb.firebaseio.com/product.json"
const columns = [{
  name: "ID",
  selector: "_id",
  sortable: true
},
{
  name: "Paises",
  selector: "paises",
  sortable: true
},
{
  name: "Minutos",
  selector: "minutos",
  sortable: true
}
]

function ExampleTabla() {
  const [data, setData] = useState([]);
  const peticionGet = async() => {
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    })
  }

  useEffect(()=>{
    peticionGet()
  },[])

  return (
    <div >
      <DataTable 
      columns={columns}
      data={data}
      title="Paises que mas ocupan internet"/>
    </div>
  );
}

export default ExampleTabla;
