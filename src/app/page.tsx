import Navbar from "@/components/navbar";
import TpEditor from "@/components/tp-editor/tp-editor";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={`flex justify-center`}>
        <div className={`w-full max-w-6xl pt-8`}>
          <TpEditor></TpEditor>
        </div>
      </div>
    </div>
  );
}
