export const getDistance = (latitude1: number,longtitude1: number,latitude2: number, longtitude2: number) =>
  Math.sqrt((latitude1 - latitude2) ** 2 + (longtitude1 - longtitude2) ** 2);
