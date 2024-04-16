import React from "react";

const Admin = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#52321b]">
          Admin Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div className="text-start">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-[#52321b]"
            >
              Admin Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
                className="block w-full bg-slate-100 px-2 outline-none rounded-md border-0 py-1.5 text-[#52321b] shadow-sm placeholder:text-[#bebab7] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-[#52321b]"
              >
                Admin Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="block w-full bg-slate-100 px-2 outline-none rounded-md border-0 py-1.5 text-[#52321b] shadow-sm placeholder:text-[#bebab7] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#52321b] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
            >
              Go To Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
