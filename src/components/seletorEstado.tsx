"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import React from "react";

export default function SeletorEstado() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-2 bg-kfcRed w-[512px] h-8">
      <label
        onClick={toggleMenu}
        className="flex justify-between items-center px-2"
      >
        <p>Selecione o Estado</p>
        <ChevronDown />
      </label>
      {isOpen && (
        <ul className="bg-kfcRed  px-2 w-full">
          {Estados.map((item) => {
            return (
              <React.Fragment key={item.name}>
                <LinkEstado Estado={JSON.stringify(item.name)} />
              </React.Fragment>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function LinkEstado({ Estado }: { Estado: string }) {
  return (
    <li>
      <Link href={`/enderecos/${Estado}`}>{Estado}</Link>
    </li>
  );
}
