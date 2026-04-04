import { faker } from "@faker-js/faker";

export const generateShippingAddress = {
    fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,

    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),

    cardNumber: faker.finance.creditCardNumber(),
    expirationDate: faker.date.future().toLocaleDateString("en-US", { month: "2-digit", year: "2-digit" }),
    securityCode: faker.finance.creditCardCVV()
}