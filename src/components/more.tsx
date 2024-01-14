import { FC } from "react";

type MoreProps = {
  show: boolean;
};

const More: FC<MoreProps> = ({ show }) => {
  if (!show) return null;
  return <p>More</p>;
};

export default More;
