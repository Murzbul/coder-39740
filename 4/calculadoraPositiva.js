

const suma = async (sum1, sum2) =>
{
  return new Promise((resolve, reject) => {
      if (sum1 !== 0 && sum2 !== 0)
      {
        resolve(sum1 + sum2);
      }

      reject('Los dos sumandos tienen que ser cero.');
    })
}

const resta = async (rest1, rest2) =>
{
  return new Promise((resolve, reject) => {
      if (rest1 !== 0 || rest2 !== 0)
      {
        resolve(rest1 - rest2);
      }

      reject('Operación inválida');
    })
}

const operaciones = async () =>
{
    try
    {
      const resSum = await suma(0,0);
      console.log(resSum);

      const resRest = await resta(10,5);
      console.log(resRest);
    }
    catch(error)
    {
      console.log(error);
    }
}

operaciones();
