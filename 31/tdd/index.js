


function login(username, password)
{
    const _username = 'coderUser';
    const _password = '1234';

    if(password === '')
    {
        return 'No se ha proporcionado un password';
    }
    if(username === '')
    {
        return 'No se ha proporcionado un username';
    }
    if(username !== _username)
    {
        return 'Usuario incorrecto';
    }
    if (_username === username && _password === password)
    {
        return 'Logueado correctamente';
    }
}

// Test 1
const res1 = login('coderUser', '');
if(res1 === 'No se ha proporcionado un password')
{
    console.log('Test 1');
}

// Test 2
const res2 = login('', '1234');
if(res2 === 'No se ha proporcionado un username')
{
    console.log('Test 2');
}

// Test 3
const res3 = login('admin', '1234');
if(res3 === 'Usuario incorrecto')
{
    console.log('Test 3')
}

// Test 4
const res4 = login('coderUser', '1234');
if(res4 === 'Logueado correctamente')
{
    console.log('Test 4')
}
