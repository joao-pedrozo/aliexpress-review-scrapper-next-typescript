import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-around">
      <button
        className="bg-red-500 p-16"
        onClick={() => fetch("/api/aliexpress-scrap")}
      >
        Aliexpress
      </button>
      <button
        className="bg-red-500 p-16"
        onClick={() => fetch("/api/scrap-with-extension")}
      >
        Extension
      </button>
      <button
        className="bg-red-500 p-16"
        onClick={() => fetch("/api/amazon-scrap")}
      >
        Amazon
      </button>
    </div>
  );
};

export default Home;
