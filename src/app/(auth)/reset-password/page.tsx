"use client";
import React, { useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";

const ForgotPasswordPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    router.push("/");
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    await signIn
      ?.create({
        strategy: "reset_password_email_code",
        identifier: email,
      })
      .then(() => {
        setSuccessfulCreation(true);
        setError("");
      })
      .catch((err) => {
        setError(err.errors[0].longMessage);
      });
  }

  async function reset(e: React.FormEvent) {
    e.preventDefault();
    await signIn
      ?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      })
      .then((result) => {
        if (result.status === "needs_second_factor") {
          setSecondFactor(true);
          setError("");
        } else if (result.status === "complete") {
          setActive({ session: result.createdSessionId });
          router.push("/");
          setError("");
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        setError(err.errors[0].longMessage);
      });
  }

  return (
    <div className="flex min-h-screen font-inter items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-xl font-semibold text-center text-zinc-900 mb-4">
          Forgot Password?
        </h1>
        <form
          className="space-y-4"
          onSubmit={!successfulCreation ? create : reset}
        >
          {!successfulCreation && (
            <div>
              <label
                className="text-sm font-medium text-zinc-950"
                htmlFor="email"
              >
                Provide your email address
              </label>
              <input
                type="email"
                placeholder="e.g john@doe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-error"
              />
              <button className="mt-4 w-full rounded-md bg-primary px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-[#1c60aa] hover:bg-[#1c60aa] focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
                Send password reset code
              </button>
              {error && <p className="block text-sm text-error">{error}</p>}
            </div>
          )}

          {successfulCreation && (
            <>
              <div>
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Enter your new password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-error"
                />
              </div>
              <div>
                <label
                  className=" text-sm font-medium text-gray-700"
                  htmlFor="code"
                >
                  Enter the password reset code sent to your email
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="mt-1 w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-error"
                />
              </div>
              <div>
                <button className="mt-4 w-full rounded-md bg-primary px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-[#1c60aa] hover:bg-[#1c60aa] focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
                  Reset
                </button>
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
            </>
          )}

          {secondFactor && (
            <p className="text-sm text-yellow-600">
              2FA is required, but this UI does not handle that
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
