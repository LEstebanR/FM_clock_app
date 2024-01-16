import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Body: FC<Props> = ({ children }) => {
  return <p className="text-white text-lg">{children}</p>;
};

export const H3: FC<Props> = ({ children }) => {
  return <h3 className="text-white text-lg">{children}</h3>;
};
