import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, Icon } from './SearchBox.styled';
import Button from 'components/common/Button/Button';

export const SearchBox = ({ onSubmit }) => {
  const [queryWord, setQueryWord] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQueryWord(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (queryWord === '') {
      alert('Please enter a word to search!');
      return;
    }
    onSubmit(queryWord);
    resetForm();
  };

  const resetForm = () => {
    setQueryWord('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={queryWord} onChange={handleChange} />
      <Button>
        <Icon />
      </Button>
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};