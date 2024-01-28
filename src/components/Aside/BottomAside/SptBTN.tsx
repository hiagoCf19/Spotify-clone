import { ReactNode } from "react";

interface Children {
  props: ReactNode;
}

// Componente Buttons.ts

export const SptBNT = (children: Children) => {
  return (
    <button className="px-3 py-2 bg-[#252525] hover:bg-[#272727] rounded-full text-[14px] text-zinc-50">{children.props}</button>
  );
}
