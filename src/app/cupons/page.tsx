import ProductCard from "@/components/productCard";
import { TCupom, produtosURL } from "@/lib/constants";
import { getData } from "@/lib/utils";

export default async function CuponsPage() {
  const cupons = await getData(produtosURL);
  // console.log(cupons);
  return (
    <article className="flex flex-wrap gap-10 justify-center px-56 bg-white">
      {cupons.map((item: TCupom) => (
        <ProductCard key={item.name} cupom={item} />
      ))}
    </article>
  );
}
