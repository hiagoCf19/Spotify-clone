

interface Children {
  ativo: number | null,
  i: number,
  base: string,
  setAtivo: React.Dispatch<React.SetStateAction<number>>
}

// Componente Buttons.ts

export const SptBNT = ({ ativo, i, base, setAtivo }: Children) => {
  return (
    <button
      key={i}
      className={`px-3 py-1 text-sm rounded-full ${ativo === i ? 'bg-zinc-50 text-[#272727]' : 'bg-[#252525] hover:bg-[#272727]text-zinc-50'}`}
      onClick={() => setAtivo(i)}
    >
      {base}
    </ button>
  );
}
