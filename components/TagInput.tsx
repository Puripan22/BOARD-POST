"use client";
import { useState } from "react";
import { Tag, TagLabel, TagCloseButton} from "@chakra-ui/react";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import axios from "axios";

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<any[]>([]);

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newTag = event.currentTarget.value.trim();
      if (newTag) {
        setTags([...tags, newTag]);
        event.currentTarget.value = "";
        try {
          const response = await axios.post("http://localhost:8000/api/Search", { tag_: newTag });
          console.log("Posts found by tag:", response.data);
          setSearchedPosts(response.data);
        } catch (error) {
          console.error("Error searching for posts by tag:", error);
        }
      
      }
    }
  };

  const handleDelete = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Card className="box-anim m-4 h-16 w-2/3 p-2 flex flex-col flex-wrap">
      {tags.map((tag) => (
        <Tag
          key={tag}
          size=" md"
          borderRadius="full"
          variant="solid"
          colorScheme="teal"
          className="TagLabel  flex justify-center bg-gradient-to-br from-red-500 to-red-300 border-small border-white/50 shadow-red-500/10"
        >
          <TagLabel className="">{tag}</TagLabel>
          <TagCloseButton
            className="TagCloseButton "
            onClick={() => handleDelete(tag)}
          />
        </Tag>
      ))}
      <Input placeholder="tags" onKeyDown={handleKeyDown} className="" />
    </Card>
  );
};

export default TagInput;
