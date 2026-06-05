export default function Navbar() {
  return (
    <div className={`flex w-full py-4 px-8 items-center gap-4`}>
      <div
        className={`text-xs py-2 px-4 bg-primary rounded-full hover:cursor-pointer 
        hover:bg-primary transition-all duration-200 hover:text-background 
        hover:text-base hover:font-bold hover:border-4 border-0`}
      >
        Tenkapad - Simple Web Based Text Editor
      </div>
    </div>
  );
}
