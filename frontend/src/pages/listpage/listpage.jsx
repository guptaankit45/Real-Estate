import "./listpage.scss"
import {listData} from "../../lib/dummydata";
import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";
function Listpage () {
const data=listData;
return(
<div className="Listpage">
<div className="listContainer">
<div className="wrapper">
    <Filter/>
    {data.map(item=>(
        <Card key={item.id} item={item}/>
    ))}
</div>
</div>
<div className="mapContainer">
map
</div>
</div>
)}
export default Listpage