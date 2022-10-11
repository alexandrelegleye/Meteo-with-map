export const actionAdressFounded= "ADRESS/ADRESSFOUNDED";

export function getAdressFounded(value){
  return {
    type: actionAdressFounded,
    payload:value,
  }
}