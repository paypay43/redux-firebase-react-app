import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ClientItemView(props) {
  const [id, setId] = useState(props.match.params.id);
  const [client, setClient] = useState(null);

  useEffect(() => {
    if (props.clients.length > 0) {
      setClient(props.clients.find(e => e.id === id));
    }
  }, [props]);

  const renderClient = () => {
    return (
      <React.Fragment>
        <p>
          <b>Id: </b> {client.id}
        </p>
        <p>
          <b>Name: </b> {client.name}
        </p>
        <p>
          <b>Age: </b> {client.age}
        </p>
        <p>
          <b>Address: </b> {client.additionalInfo.address}
        </p>
        <p>
          <b>Company: </b> {client.additionalInfo.company}
        </p>
        <p>
          <b>Email: </b> {client.additionalInfo.email}
        </p>
        <p>
          <b>Phone: </b> {client.additionalInfo.phone}
        </p>
      </React.Fragment>
    );
  };

  return (
    <div className="detail-view">
      <Link to="/">Go Back</Link>
      {client !== null && renderClient()}
      {client === null && <div>Loading</div>}
    </div>
  );
}

export default ClientItemView;
