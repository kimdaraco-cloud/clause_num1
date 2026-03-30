"use client";

import Link from "next/link";
import PasswordInput from "./PasswordInput";

type Props = {
  mode: "login" | "signup";
};

export default function AuthForm({ mode }: Props) {
  const isLogin = mode === "login";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6">{isLogin ? "Log In" : "Sign Up"}</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <PasswordInput />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          {isLogin ? (
            <>Don&apos;t have an account?{" "}<Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link></>
          ) : (
            <>Already have an account?{" "}<Link href="/login" className="text-blue-600 hover:underline">Log in</Link></>
          )}
        </p>
      </div>
    </div>
  );
}
