import React from 'react';
import { Link } from 'react-router-dom';

function LandingView(props) {
  const renderClients = () => {
    return props.clients.map(client => (
      <tr key={client.id}>
        <td>
          <Link to={`/client/${client.id}`}>{client.id}</Link>
        </td>
        <td>{client.name}</td>
        <td>{client.age}</td>
      </tr>
    ));
  };

  return (
    <div className="dashboard">
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
        {renderClients()}
      </table>
    </div>
  );
}

export default LandingView;
