import Person from "./Person";
const List = ({ buddies }) => {
  return (
    <section>
      {buddies.map((buddy) => {
        return <Person key={buddy.id} {...buddy} />;
      })}
    </section>
  );
};
export default List;
