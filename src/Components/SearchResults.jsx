import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';

function SearchResults({ users, onUserClick }) {
  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroup.Item key={user.id} action onClick={() => onUserClick(user)}>
          <Image
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            roundedCircle
            className="mr-3"
            width={50}
            height={50}
          />
          <div>
            <div>{user.name}</div>
            <div>{user.location}</div>
            <div>{user.bio}</div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default SearchResults;
