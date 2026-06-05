import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={`flex justify-center`}>
        <div className={`w-full max-w-4xl`}></div>
      </div>
    </div>
  );
}
