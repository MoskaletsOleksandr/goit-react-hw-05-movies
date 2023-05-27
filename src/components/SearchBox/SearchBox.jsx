import { useState } from 'react';
import { Form, Input, Icon, Button } from './SearchBox.styled';

export const SearchBox = ({ value, onSubmit }) => {
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
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={queryWord}
        onChange={handleChange}
      />
      <Button>
        <Icon />
      </Button>
    </Form>
  );
};
