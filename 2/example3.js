
function getUser(params)
{
  let name = 'German';
  return `${name} ${params}`;
}

console.log(getUser('Russo'));

const getRoles = () => 'Admin';

const getRoles2 = () => {
  let name = 'otherRole';   
  return name;
};

console.log(getRoles());