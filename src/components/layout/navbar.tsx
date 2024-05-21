"use client";
import { navbarContent } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <ul className="flex flex-row p-1 gap-2  ">
      {navbarContent.map((item) => (
        <NavItem key={item.route} route={item.route}>
          {item.name}
        </NavItem>
      ))}
    </ul>
  );
}

type NavItemProps = { route: string; children: React.ReactNode };
function NavItem({ route, children }: NavItemProps) {
  const activeTab = usePathname();

  return (
    <li
      className={cn(
        "p-2 uppercase text-xl font-bold",
        { "text-white bg-kfcRed": activeTab === route },
        { "text-black bg-white": activeTab !== route }
      )}
    >
      <Link href={route}>{children}</Link>
    </li>
  );
}
