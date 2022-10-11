import Button from "react-bootstrap/Button";
export const Token = (props) => {
  const { img, name, consensus, background, description, link } = props.token;
  return (
    <div
      style={{ background: background }}
      className="token"
      onMouseOver={() => {}}
    >
      <img src={img} alt="" />
      <h2>
        <b>{name}</b>
      </h2>
      <p>{description}</p>
      <h2 style={{ fontSize: "20px", marginTop: "1rem" }}>{consensus}</h2>
      <Button
        style={{ borderRadius: "1rem" }}
        href={link}
        variant="info"
        className="btn-primary"
      >
        {name}
      </Button>
    </div>
  );
};
