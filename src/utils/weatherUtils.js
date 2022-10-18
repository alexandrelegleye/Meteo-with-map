


export const getDayOnly = (date) => {
  const dateToFormat = new Date(date);
  const options = { weekday: "long" };
  const day = new Intl.DateTimeFormat("fr-FR", options).format(dateToFormat);
  return (day)
  
};

export const getTimeOnly = (date) => {
  const dateToFormat = new Date(date);
  return(
    //`${dateToFormat.getHours()}H${dateToFormat.getHours()}`
    dateToFormat.toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" }
    ))
};

export const formatTimeStamp = (ts) => {
  const dateToFormat = new Date(ts);
  const day = getDayOnly(ts)
  const hour = dateToFormat.getHours();
  let textHour = "";

  switch (hour) {
  case 12:
    textHour = "midi";
    break;
  case 0:
    textHour = "minuit";
    break;
  default:
    textHour = `${hour}h`;
  }
  return (
    `${day} à ${textHour}`
  );

};

export const handleRain = (data) => {
  if (!data.rain) {
    return 0
  }
  if (data.rain) {
    if (data.rain["1h"]) {
      return data.rain["1h"]
    } else if (data.rain["3h"])
      return data.rain["3h"]
  }
}
  