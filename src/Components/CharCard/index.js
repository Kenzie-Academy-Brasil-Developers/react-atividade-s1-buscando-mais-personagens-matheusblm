import "./style.css";
function CharCard({ name, status, image }) {
  return (
    <>
      {status === "Alive" ? (
        <div
          className={"char"}
          style={{ backgroundColor: "#90ee90 ", color: "black" }}
        >
          {" "}
          {name.length > 15 ? (
            <p> {name.slice(0, 15) + "..."}</p>
          ) : (
            <p>{name}</p>
          )}
          <img src={image} />{" "}
        </div>
      ) : (
        <div className={"char"} style={{ backgroundColor: "#FF7F7F" }}>
          {" "}
          {name.length > 15 ? (
            <p> {name.slice(0, 15) + "..."}</p>
          ) : (
            <p>{name}</p>
          )}
          <img src={image} />
        </div>
      )}
    </>
  );
}

export default CharCard;
