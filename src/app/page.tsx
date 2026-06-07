import Navbar from "@/components/navbar";
import Editor from "@/components/editor";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={`flex justify-center`}>
        <div className={`w-full max-w-6xl pt-8`}>
          <Editor></Editor>
        </div>
      </div>
    </div>
  );
}
