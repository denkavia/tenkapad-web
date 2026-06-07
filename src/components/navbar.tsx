import Link from "next/link";

export default function Navbar() {
  return (
    <div className={`w-full border-b-2 tp-container-wrapper py-4 bg-white`}>
      <div className={`w-full tp-container justify-between items-center flex`}>
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
