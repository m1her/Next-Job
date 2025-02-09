"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-in";
const CreateHunterAccount = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center w-2/5 px-20 py-10">
      <SignUp.Root>
        <SignUp.Step name="start" className="w-full space-y-6 font-inter">
          <header className="text-center flex flex-col items-start">
            <div className="font-inter text-[38px] font-medium tracking-tight text-zinc-950">
              Join <span className="text-primary font-semibold">NEXTJOB</span>
            </div>
            <div className="font-inter text-sm tracking-tight text-zinc-600">
              Please, Enter Valid Details
            </div>
          </header>
          <div className="grid grid-cols-2 gap-2 -mt-2">
            <Clerk.Connection
              name="google"
              className="shadow flex justify-center fill-zinc-800 hover:fill-zinc-900 w-full px-4 py-2 border border-zinc-300 rounded hover:border-zinc-600 transition-all duration-150 hover:bg-zinc-100"
            >
              <svg
                className="md:w-5 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 532 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </Clerk.Connection>
            <Clerk.Connection
              name="github"
              className="shadow flex justify-center fill-zinc-800 hover:fill-zinc-900 w-full px-4 py-2 border border-zinc-300 rounded hover:border-zinc-600 transition-all duration-150 hover:bg-zinc-100"
            >
              <svg
                className="md:w-5 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </Clerk.Connection>
          </div>
          <div className="flex items-center font-inter gap-x-3 text-sm text-zinc-900 before:h-px before:flex-1 before:bg-zinc-300 after:h-px after:flex-1 after:bg-zinc-300">
            or
          </div>
          <Clerk.GlobalError className="block text-sm text-error" />
          <div className="space-y-4">
            <Clerk.Field name="identifier" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-zinc-950">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-error"
              />
              <Clerk.FieldError className="block text-sm text-error" />
            </Clerk.Field>
            <Clerk.Field name="emailAddress" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-zinc-950">
                Email
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-error"
              />
              <Clerk.FieldError className="block text-sm text-error" />
            </Clerk.Field>
            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-zinc-950">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-error"
              />
              <Clerk.FieldError className="block text-sm text-error" />
            </Clerk.Field>
          </div>
          <SignUp.Action
            submit
            className="w-full rounded-md bg-primary px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-[#1c60aa] hover:bg-[#1c60aa] focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            Sign Up
          </SignUp.Action>
          <p className="text-center text-sm text-zinc-500">
            No account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className="font-medium text-primary decoration-[#175496]/50 underline-offset-4 outline-none hover:text-[#175496] hover:underline focus-visible:underline"
            >
              Create an account
            </Clerk.Link>
          </p>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
};

export default CreateHunterAccount;
