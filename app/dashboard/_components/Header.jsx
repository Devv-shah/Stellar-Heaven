"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";

function Header() {
  // From here we are actually getting the count of the real time user credit
  const { userDetail, setUserDetial } = useContext(UserDetailContext);

  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-2">
        <Image src={"/house.png"} alt="logo" width={35} height={35} />
        <h2 className="font-bold text-base mt-2 bg-gradient-to-r from-blue-700 via-purple-500 to-orange-400 text-transparent bg-clip-text">
          STELLAR HAVEN
        </h2>
      </div>
      <Button variant="ghost" className="rounded-full text-primary">
        Buy More Credits
      </Button>

      <div className="flex gap-7 items-center">
        <div className="flex gap-2 items-center bg-slate-200 px-3 rounded-full">
          <Image src={"/star.png"} alt="Credit-img" width={20} height={20} />
          <h2>{userDetail?.credits}</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
