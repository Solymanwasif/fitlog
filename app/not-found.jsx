import Link from "next/link";

export default function NotFound(){

  return(

    <main className="smallest-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-7xl font-bold">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-5">
          PAGE NOT FOUND
        </h2>

        <p className="text-gray-400 mt-4">
          The workout page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#ccff00] text-black px-6 py-3 rounded-full font-bold"
        >
          Go Home
        </Link>

      </div>

    </main>

  );

}