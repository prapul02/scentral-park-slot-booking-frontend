import Image from "next/image";

import MyForm from "@/components/MyForm";
import Header from "@/components/Header";

export default function Home() {

  return (
    <div className = "app-container">
    <Header/>
    <MyForm/>
    </div>
  );
}
