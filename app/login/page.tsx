"use client";
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { Card } from "@nextui-org/card";
import React from "react";
import { EyeFilledIcon } from "@/app/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/icon/EyeSlashFilledIcon";
import Link from "next/link";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="h-full w-full justify-center items-center flex flex-col border-gray-400 border-2 rounded-xl">
      <Card className=" box-anim  w-2/5 flex border-gray-500 bg-blend-normal border-2 h-5/6 flex-col  items-center rounded-xl">
        <p className=" font-bold text-6xl pt-28">Login</p>
        <div className="flex flex-col w-full h-1/4 pt-16 items-center">
          <Input
            isClearable
            onClear={() => console.log("input cleared")}
            name="title"
            type="text"
            label="Username"
            className="w-2/3 h-full "
          />
        </div>
        <div className="flex flex-col  w-full h-1/3  pt-16 items-center">
          <Input
            variant="bordered"
            label="Password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="w-2/3 h-full"
          />
        </div>
        <div className="flex w-full h-2/3  pt-14 justify-center ">
          <div className="flex w-full h-full    ">
            <Link href="/" className="w-full h-full justify-end flex pr-4">
              <Button type="submit" className="w-3/5  h-14 " href="/">
                Login
              </Button>
            </Link>
          </div>
          <div className="flex w-full h-full pl-4  ">
            <Link href="/signin" className="w-full h-full justify-start flex  ">
              <Button type="submit" className="w-3/5 h-14 " href="/sigin">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
