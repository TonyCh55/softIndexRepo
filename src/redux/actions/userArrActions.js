export const addUser = (firstName, lastName, phone, age) => ({
    type: 'ADD',
    data: {
        id: Date.now(),
        firstName,
        lastName,
        phone,
        age
    }
})

export const deleteUser = (id) => ({
    type: 'DELETE',
    id
})

export const firstNameSort = () => ({
    type: 'FIRST_NAME'
})

export const lastNameSort = () => ({
    type: 'LAST_NAME'
})

export const phoneSort = () => ({
    type: 'PHONE'
})

export const ageSort = () => ({
    type: 'AGE'
})