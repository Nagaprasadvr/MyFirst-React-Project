import Button from "react-bootstrap/Button";
import React from "react";
export const Token = (props) => {
  const { img, name, consensus, background, description, link, font } =
    props.token;

  return (

    <div style={{ background: background }} className="token">
      <img src={img} alt="" />
      <h2 style={{ color: font }}>
        <b>{name}</b>
      </h2>
      <p style={{ color: font }}>
        <b>{description}</b>
      </p>
      <h2 style={{ color: font, fontSize: "20px", marginTop: "1rem" }}>
        <b>{consensus}</b>
      </h2>
      <Button
        style={{ borderRadius: "1rem",color:"white" }}
        href={link}
        variant="info"
        className="btn-primary"
      >
        {name}
      </Button>
    </div>
  );
};
