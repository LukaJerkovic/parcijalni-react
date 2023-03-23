import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formSearch">
        <Form.Label>GitHub username:</Form.Label>
        <Form.Control
          type="text"
          placeholder="e.g. facebook"
          value={query}
          onChange={handleInputChange}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          GO!
        </Button>
      </div>
    </Form>
  );
}

export default SearchBar;
