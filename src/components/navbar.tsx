import Link from "next/link";

export default function Navbar() {
  return (
    <div className={`w-full border-b-2 flex justify-center py-4 px-4 bg-white`}>
      <div className={`w-full max-w-6xl flex justify-between items-center`}>
        <Link
          className={`border border-black w-fit px-4 py-2 shadow-[4px_4px_0px_0px_black] cursor-pointer`}
          href="/"
        >
          TENKAPAD
        </Link>
        <div className={`border-dotted border-b hover:cursor-help`}>
          Simple Text Editor
        </div>
      </div>
    </div>
  );
}
