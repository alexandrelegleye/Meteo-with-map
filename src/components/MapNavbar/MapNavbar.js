export default function MapNavbar({
  onStyleChange
  }
){
  return (
    <div className="heading">
    <h1>This is my map App</h1>
    <button type="button" onClick={(e) => onStyleChange('osm-carto')}> 
    color
    </button>
    <button type="button" onClick={(e) => onStyleChange('toner-grey')}> 
    Black And White
    </button>
    </div>
  );
}


