import React from "react";

import { Tokens } from "./Tokens";
import { Token } from "./Token";

import { createRoot } from "react-dom/client";

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

const container = document.getElementById("root");

// ReactDom.render(<TokenList />, container);

const root = createRoot(container);

root.render(<TokenList />);
