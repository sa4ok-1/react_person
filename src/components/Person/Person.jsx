export const Person = ({
  person: { name, age, sex, partnerName, isMarried },
}) => {
  const MAN = 'm';
  const WOMAN = 'f';

  let marriedMF;

  if (isMarried && (sex === MAN || sex === WOMAN)) {
    marriedMF =
      sex === MAN
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  } else {
    marriedMF = 'I am not married';
  }

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        <p className="Person__partner">{marriedMF}</p>
      </section>
    </div>
  );
};
