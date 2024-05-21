import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
      <div>
        <Link href="/cupons">
          <Image
            src={
              "https://cupons.kfcbrasil.com.br/wp-content/uploads/2024/04/Banner-site-cubinhos-1.png"
            }
            alt="Novos Cubinhos de Frango"
            width={1354}
            height={827}
            objectFit="cover"
          />
        </Link>
      </div>
      <div className="flex flex-row">
        <Link href="/cupons">
          <Image
            src="https://cupons.kfcbrasil.com.br/wp-content/uploads/2023/10/banner-1-1.png"
            alt="Resgate agora seus cupons"
            width={677}
            height={300}
          />
        </Link>
        <Link href="/kfc-mais-proximo">
          <Image
            src="https://cupons.kfcbrasil.com.br/wp-content/uploads/2023/10/banner-2-1.png"
            alt="Confira o KFC mais próximo"
            width={677}
            height={300}
          />
        </Link>
      </div>
    </main>
  );
}
