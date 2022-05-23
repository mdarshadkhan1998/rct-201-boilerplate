import { Card } from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
function Body() {

  const [mapData, setMapData] = useState<any[]>([]);
  // console.log(mapData)
  const getData = () => {
    axios.get("http://localhost:8080/products")
    .then(({data})=>setMapData(data))
  }
  useEffect(()=>{
      getData();
  },[])

  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */}
        {
          mapData.map((e)=><Card key={e.id} d={e}/>)
        }
    </div>
  );
}

export { Body };
