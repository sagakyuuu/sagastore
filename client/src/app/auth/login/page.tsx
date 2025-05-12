"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        action=""
        className="min-w-xs flex flex-col border-2 border-black px-5 py-2"
      >
        <div className="mb-5">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <p className="text-center">Enter detail's for login</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="email" className="border" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Passowrd</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <button className="border w-full">Login</button>
          <p>
            Don't Have an account? <Link href={"/auth/register"}>Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
