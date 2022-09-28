export default function MapNavbar({
  onStyleChange,
  adressSelected
  }
){
  return (
    <div className="heading">
      {adressSelected &&
      <h1>{adressSelected}</h1>
      }
    
    <button type="button" onClick={(e) => onStyleChange('osm-carto')}> 
    color
    </button>
    <button type="button" onClick={(e) => onStyleChange('toner-grey')}> 
    Black And White
    </button>
    </div>
  );
}


