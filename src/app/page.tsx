import Navbar from "@/components/navbar";
import TpEditor from "@/components/tp-editor/tp-editor";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={`tp-container-wrapper`}>
        <div className={`tp-container pt-8`}>
          <TpEditor></TpEditor>
        </div>
      </div>
    </div>
  );
}
