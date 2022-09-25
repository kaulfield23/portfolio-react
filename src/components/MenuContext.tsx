import { createContext, FC, PropsWithChildren, useState } from "react";

interface IMenuContext {
  switchMenuTo: string;
  changeSwitchMenuTo: (value: string) => void;
}

export const MenuContext = createContext<IMenuContext>({
  switchMenuTo: "",
  changeSwitchMenuTo: () => ({}),
});

const MenuContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [switchMenuTo, setSwitchMenuTo] = useState("");
  const changeSwitchMenuTo = (value: string) => {
    setSwitchMenuTo(value);
  };

  return (
    <MenuContext.Provider value={{ switchMenuTo, changeSwitchMenuTo }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
