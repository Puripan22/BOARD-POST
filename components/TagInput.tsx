"use client";
import { useState } from 'react';
import { Tag, TagLabel, TagCloseButton, Input } from '@chakra-ui/react';

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newTag = event.currentTarget.value.trim();
      if (newTag) {
        setTags([...tags, newTag]);
        event.currentTarget.value = '';
      }
    }
  };

  const handleDelete = (tagToDelete: string) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
  };

  return (
    <div>
      {tags.map(tag => (
        <Tag key={tag} size=" md" borderRadius="full" variant="solid" colorScheme="teal" className='TagLabel'>
          <TagLabel >{tag}</TagLabel>
          <TagCloseButton className='TagCloseButton' onClick={() => handleDelete(tag)} />
        </Tag>
      ))}
      <Input placeholder="tags" onKeyDown={handleKeyDown} />
    </div>
  );
};

export default TagInput;
