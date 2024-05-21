import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export async function getData(url: string): Promise<any> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao Carregar Dados");
  }
  //   console.log(response);
  return response.json();
}

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
