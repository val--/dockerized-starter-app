import React, {FC, useEffect, useState} from 'react';
import { createHeaders, url } from '../api';

interface Props {
  name: string;
}

interface ApiResponse {
  status: string;
  code: string;
}

const SimpleApiChecker: FC<Props> = ({ name }: Props) => {

  const [healthCheck, setHealthCheck] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const getHealthCheck = async () => {
      const response = await fetch(url);
      const healthCheckResponse = await response.json();
      console.log(healthCheckResponse);
      setHealthCheck([]); // TODO
      return;
    };
    getHealthCheck();
    setLoading(false);
  }, []);

  return (
    <div>
      <p>Checking API {name}...</p>
    </div>
  )
};

export default SimpleApiChecker;
