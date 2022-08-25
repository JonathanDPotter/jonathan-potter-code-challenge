import React, { FC, ReactNode } from 'react'

interface Iprops {
  children: ReactNode;
}

const LabelInput: FC<Iprops> = ({ children }) => {
  return <div className="label-input">{children}</div>;
};

export default LabelInput