import Image from "next/image";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center bg-white border-2 border-b-kfcRed">
      <Image
        className="py-6"
        src="https://cupons.kfcbrasil.com.br/wp-content/uploads/2024/03/KFC_Wordmark_RGB_Red.png"
        alt="KFC"
        width={396}
        height={193}
      />
      <Navbar />
    </header>
  );
}
