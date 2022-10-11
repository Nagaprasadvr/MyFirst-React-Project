import React from "react";

import { Tokens } from "./Tokens";
import { Token } from "./Token";


import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function TokenList() {
  return (
    <div className="tokenlist">
      {Tokens.map((token) => {
        return <Token key={token.id} token={token}></Token>;
      })}
    </div>
  );
}

export default TokenList;