import { createContext, useState, useContext } from 'react';
import { siteMap } from '../data/siteMap';
import { ISiteLocation } from '../types';

const defaultContext = {
  currentLocation: siteMap.home,
  updateLocation: (siteLocation: ISiteLocation) => { return null }
}

export const AppContext = createContext(defaultContext);

export function GeneralContextWrapper({ children }) {

  const [currentLocation, setCurrentLocation] = useState(siteMap.home);
  const updateLocation = (location: ISiteLocation) => {
    setCurrentLocation(location)
  }

  return (
    <AppContext.Provider value={{ currentLocation, updateLocation }}>
      {children}
    </AppContext.Provider>
  );
}

export function GeneralContext() {
  return useContext(AppContext);
}








