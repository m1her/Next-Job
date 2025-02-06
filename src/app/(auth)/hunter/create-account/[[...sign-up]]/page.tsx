import { SignUp } from "@clerk/nextjs";
import React from "react";

const CreateHunterAccount = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <SignUp />
    </div>
  );
};

export default CreateHunterAccount;
