import { atom } from "recoil";

export const lngState = atom({
  key: "lngState",
  default: 55.471843, 
});

export const latState = atom({
  key: "latState",
  default: -21.332838, 
});

export const formattedAdressState = atom({
  key: "formattedAdressState",
  default: "adresse cherchée", 
});

export const zoomState = atom({
  key: "zoomState",
  default: 14, 
});

export const apiKeyState = atom({
  key: "apiKeyState",
  default: process.env.REACT_APP_GEOCODERKEY, 
});

export const mapStyleState = atom({
  key: "mapStyleState",
  default: "osm-carto", 
});

export const firstInputState = atom({
  key: "firstInputState",
  default: false, 
});

