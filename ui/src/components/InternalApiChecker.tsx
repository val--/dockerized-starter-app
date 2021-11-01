import React, {useEffect, useState} from 'react';
import axios, { AxiosError } from 'axios';

const url = `${process.env.REACT_APP_API_URL}/healthCheck`;

interface IApiHealthCheck {
  id: number;
  status: string;
  code: number;
  date: string;
}

const defaultApiHealthCheck: IApiHealthCheck[] = [];

const App = () => {

  const [healthCheck, setApiHealthCheck]: [IApiHealthCheck[], (healthCheck: IApiHealthCheck[]) => void] = useState(defaultApiHealthCheck);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState('');

  useEffect(() => {
    axios.get<IApiHealthCheck[]>(url, {headers: { 'Content-Type': 'application/json'}})
      .then((response: { data: IApiHealthCheck[]; }) => {
        setApiHealthCheck(response.data);
        setLoading(false);
      })
      .catch((error: any) => {
        setError( 'API returned an error : ' + error.response.status + ' : ' + error.response.statusText);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <ul className="healthCheck">
        { healthCheck && healthCheck.map((check) => (
          <li key={ check.id }>
            <h2>{ check.date }</h2>
            <h3>{ check.status }</h3>
            <p>{ check.code }</p>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
