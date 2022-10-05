import React, {useEffect} from "react";
import { Card, Icon} from "semantic-ui-react";

import "./DailyWeatherStyle.css";

function DailyWeatherCard({
  dailyWeatherData
}) {
 
  useEffect(() => {
    console.log("DailyWeather",   dailyWeatherData, 
    );      

  },[dailyWeatherData]);

  return (
    <div className="weather-day">
      <h2>Méteo de la semaine: </h2>
      <Card.Group itemsPerRow={7} stackable>
        {dailyWeatherData.time.map((day, index) => (
        // eslint-disable-next-line react/jsx-key
          <Card
            key={day}
          >
            <p></p>
            <p>Weather Code </p>
            <Card.Content>
              <Card.Header>{day}</Card.Header>
              <Card.Meta>
                <span className='rain'> Précipitations: {dailyWeatherData.precipitation_sum[index]}mm</span>
              </Card.Meta>
              <Card.Description>
                Temp: min {dailyWeatherData.temperature_2m_min[index]}°C / max  {dailyWeatherData.temperature_2m_max[index]}°C
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>
                <Icon name='sun' />
                Sun: {dailyWeatherData.sunrise[index].slice(11)} / {dailyWeatherData.sunset[index].slice(11)}
              </p>
            </Card.Content>
          </Card>
          
        ))}
      </Card.Group>

    </div>
  );
}

export default React.memo(DailyWeatherCard);
