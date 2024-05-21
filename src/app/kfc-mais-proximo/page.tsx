import SeletorEstado from "@/components/seletorEstado";
import { lojasURL } from "@/lib/constants";
import { getData } from "@/lib/utils";
import Image from "next/image";

export default async function NearestKFCPage() {
  const lojas = await getData(lojasURL);
  return (
    <article className="bg-white flex flex-col gap-10 justify-center items-center">
      <div>
        <Image
          src="https://cupons.kfcbrasil.com.br/wp-content/uploads/2024/03/sadsaas-1-estado.png"
          alt="Selecione o Estado Desejado"
          width={1024}
          height={218}
        />
      </div>
      <div className="h-96">
        {/* <SeletorEstado estadosList={estados} /> */}
      </div>
    </article>
  );
}
