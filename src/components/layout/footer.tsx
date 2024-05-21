import { footerContent, socialMedia } from "@/lib/constants";
import Logo from "../Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center h-[270px] gap-4 pt-16">
      <div className="flex flex-row gap-96">
        <div className="flex gap-10">
          <div>
            <Logo />
          </div>
          <div>
            <ul>
              {footerContent.map((item) => (
                <li className="uppercase text-lg font-bold" key={item.route}>
                  <Link href={item.route}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          {socialMedia.map((item) => (
            <button key={item.url}>{item.icon}</button>
          ))}
        </div>
      </div>
      <div>
        <small className="font-bold text-white/60 uppercase">
          &copy; Esse site é uma cópia para propósitos de estudo.
        </small>
      </div>
    </footer>
  );
}
