import { ReactNode, createContext, useState } from "react";
interface Children {
  children: ReactNode;
}
interface MudaCorContextProps {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchCtx = createContext({} as MudaCorContextProps);
// SearchOpejnProvider é o que irá no main
export function SearchOpenProvider({ children }: Children) {
  //contexto a sert compartilhado
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    //conteúdo que será compartilhado
    <SearchCtx.Provider
      value={{
        searchOpen,
        setSearchOpen,

      }}
    >
      {children}
    </SearchCtx.Provider>
  );
}

export default SearchCtx;