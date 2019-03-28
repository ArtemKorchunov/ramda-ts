import R from "ramda";

const person = {
  id: 2,
  name: "Joe"
};

const generateUrl = id => `https://img.socialnetwork.com/avatar/${id}.png`;
const getPersonUrl = R.compose(
  generateUrl,
  R.propOr("defaultValue", "id")
);
const getUpdatedPerson = R.converge(R.assoc("avatar"), [
  getPersonUrl,
  R.identity
]);

const udpatedPerson = getUpdatedPerson(person);
console.log(udpatedPerson);
