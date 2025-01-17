
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-wrap gap-10 px-8 py-2.5 w-full text-2xl text-black bg-yellow-50 border border-black border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex gap-1.5 my-auto whitespace-nowrap">
        <div className="flex shrink-0 bg-yellow-50 border border-black border-solid h-[34px] w-[92px]" />
        <div className="self-start">Lund</div>
      </div>
      <div className="flex flex-wrap flex-auto gap-10 items-start max-md:max-w-full">
        <form className="flex flex-wrap gap-10 py-1 pr-2.5 pl-8 mt-1 bg-white rounded-xl border border-black border-solid max-md:pl-5 max-md:max-w-full">
          <label htmlFor="searchInput" className="sr-only">
            Search here
          </label>
          <input
            id="searchInput"
            type="search"
            placeholder="Search here"
            className="self-start bg-transparent border-none outline-none"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2e153811a2c92c9c1e0be075cf79be79be6e3d7324dbd96f8cf51a164d2a6e3?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            alt=""
            className="object-contain shrink-0 w-9 aspect-[0.97]"
          />
        </form>
        <div
          className="flex shrink-0 bg-white rounded-full border border-black border-solid h-[45px] w-[45px]"
          role="img"
          aria-label="User profile"
        />
      </div>
    </header>
  );
};

export default Header;
