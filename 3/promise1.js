

const dividir = (dividendo, divisor) =>
{
    return new Promise((resolve, reject) => {
      if (divisor === 0)
      {
        reject('No se pueden hacer divisiones entre cero');
      }
      else
      {
        resolve(dividendo / divisor);
      }
    })
}

dividir(10,2)
    .then(res => {
      console.log(res);
    }).
    catch(e => {
      console.log(e)
    });

dividir(10,0)
    .then(resultado => {
      console.log(resultado);
    }).
    catch(error => {
      console.log(error);
    });

