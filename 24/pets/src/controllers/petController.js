
export const pets = [];

export const save = async (req, res) =>
{
  const { name, specie } = req.body;
  const newPet = { name, specie };
  pets.push(newPet);

  res.status(201).send({ status: 'success', pet: newPet })
};

export const getOne = async (req, res) =>
{
    console.log('req.pet');
    console.log(req.pet);

    const { pet: petName } = req.params;
    const pet = pets.find(pet => pet.name === petName);

    if(!pet)
    {
        return res.status(404).send({ error: 'Pet not found' });
    }

    res.send({ status: 'success', pet });
};

export const update = async (req, res) =>
{
  const { pet: petName } = req.params;
  const pet = pets.find(pet => pet.name === petName);

  if(!pet)
  {
    return res.status(404).send({ error: 'Pet not found' });
  }

  pet.adopted = true;

  res.send({ status: 'success', pet });
};
