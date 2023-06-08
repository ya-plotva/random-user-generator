const url = 'https://randomuser.me/api/';

const getUserInfo = async () => {
  const response = await fetch(url);
  const data = await response.json();
  // destructure
  const person = data.results[0];
  const {
    phone,
    email,
    dob: { age },
  } = person;
  const { first: firstName, last: lastName } = person.name;
  const { large: image } = person.picture;
  const { password } = person.login;
  const {
    street: { number: strNumber, name: strName },
  } = person.location;
  // property name should match data-labels in HTML
  return {
    phone,
    email,
    age,
    name: `${firstName} ${lastName}`,
    image,
    password,
    street: `${strNumber} ${strName}`,
  };
};

export default getUserInfo;
