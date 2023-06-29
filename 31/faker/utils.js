import { faker } from '@faker-js/faker';

export const generateUser = () => {

    return {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        bio: faker.lorem.paragraph(),
        image: faker.image.imageUrl(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    }
}
