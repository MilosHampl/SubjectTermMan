/* eslint-disable */

const createDtoInType = shape({
    firstName: string().isRequired(),
    lastName: rstring().isRequired(),
    birthNumber: string(/[0-9]{6}\/[0-9]{4}/g).isRequred()
});

const updateDtoInType = shape({
    id: mongoId().isRequired(),
    firstName: string().isRequired(),
    lastName: rstring().isRequired(),
    birthNumber: string(/[0-9]{6}\/[0-9]{4}/g).isRequred()
});

const getDtoInType = shape({
    id: mongoId().isRequired()
});

const deleteDtoInType = shape({
    id: mongoId().isRequired()
});

const listDtoInType = shape({
    filter: shape({
        hasClass: boolean(),
        onPage: integer(),
        page: integer(),
        orderBy: string().oneOf(["id", "firstName", "lastName"]),
        order: string().oneOf(["asc", "desc"])
    })
});