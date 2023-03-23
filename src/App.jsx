import React, { useState } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';


function App() {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);

  const searchUsers = async (query) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`
    );
    const data = await response.json();
    setUsers(data.items);
  };

  const getUserRepos = async (user) => {
    const response = await fetch(
      `https://api.github.com/users/${user.login}/repos`
    );
    const data = await response.json();
    setRepos(data);
  };

  const handleUserClick = (user) => {
    getUserRepos(user);
  };

  const handleResetClick = () => {
    setUsers([]);
    setRepos([]);
  };

  return (
    <Container className="d-flex justify-content-center mt-5 align-items-center h-100;;">
      <div className="bg-light p-4 rounded">
        <Row>
          <Col>
            <SearchBar onSearch={searchUsers} />
          </Col>
        </Row>
        {users.length > 0 && (
          <Row className="mt-4">
            <Col>
              <SearchResults users={users} onUserClick={handleUserClick} />
            </Col>
          </Row>
        )}
        {repos.length > 0 && (
          <Row className="mt-4">
            <Col>
              <ListGroup>
                {repos.map((repo) => (
                  <ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        )}
        {(users.length > 0 || repos.length > 0) && (
          <Row className="mt-4">
            <Col>
              <Button variant="secondary" onClick={handleResetClick}>
                Reset
              </Button>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
}

export default App;