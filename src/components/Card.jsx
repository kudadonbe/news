import React from "react";

const Card = ({children, bg = "bg-indigo-200"}) => {
  return (<div className={`${bg} w-[86mm] h-[54mm] border`} >{children}</div>);
};

export default Card;
