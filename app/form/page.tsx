import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { SearchIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { title } from "@/components/primitives";
import { Textarea } from "@nextui-org/input";
import { Card } from "@nextui-org/card";
import TagInput from "@/components/TagInput";

export default function FormPage() {
  return (
    <div className="h-full w-full justify-center items-center flex flex-col border-gray-400 border-2 rounded-xl">
      <Card className=" box-anim  w-2/5 flex border-gray-500 bg-blend-normal border-2 h-5/6 flex-col items-center rounded-xl ">
        <div className="flex flex-col w-full h-1/4 pt-5 items-center">
          <label htmlFor="title" className={title()}>
            Title
          </label>
          <Input
            name="title"
            type="text"
            placeholder="Title of the post"
            className="w-2/3 h-full pt-4"
          />
        </div>
        <div className="flex flex-col  w-full h-1/3  items-center pt-6">
          <label htmlFor="content" className={title()}>
            Content
          </label>
          <Textarea
            className="h-full w-2/3  pt-4 "
            name="content"
            placeholder="Content of the post"
          />
        </div>
        <Card className="h-1/6 w-2/5 mt-12 p-2">
          <TagInput />
        </Card>
        <div className="flex w-full h-1/3  pt-8 justify-center ">
          <Button type="submit" className="w-1/5 h-1/4 ">
            Add Post
          </Button>
        </div>
      </Card>
    </div>
  );
}
