import { createContext, useContext } from 'react';

const ApiDataContext = createContext();

export function UseApiData () {
  return useContext(ApiDataContext);
}

export default ApiDataContext;