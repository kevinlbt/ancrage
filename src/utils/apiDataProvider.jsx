import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ApiDataContext from './UseApiData';

const token = "e98e1b6a60e1cce2296a55b9bbb7a62e16436ddea249e42b733df5df240520867e8a9fa4ee90332b8cc7d1d38b40ef8492a07a60c93e912e2ce184470272893f5e6b65fa3fb6a2c0668e4daedd88dd5fda997e557622a86f784a70fe60d071c9e1d55afd4e6c63b3701142bb694a7bc25d03f6aadcadb1a8edc87019c1c9d5e0"


export function ApiDataProvider({ children }) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApiData() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://my-strapi.kevinlebot.com/api/articles?populate=*&sort[0]=createdAt%3Adesc",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setApiData(data.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchApiData();
  }, []);

  const contextValue = useMemo(() => ({ apiData, loading, error }), [apiData, loading, error]);

  return <ApiDataContext.Provider value={contextValue}>{children}</ApiDataContext.Provider>;
}

ApiDataProvider.propTypes = {
  children: PropTypes.node,
};