import CharCard from "../CharCard";
function Characters({ characterList }) {
  return (
    <>
      {characterList.map((element) => (
        <CharCard
          key={element.id}
          name={element.name}
          status={element.status}
          image={element.image}
        />
      ))}
    </>
  );
}

export default Characters;
