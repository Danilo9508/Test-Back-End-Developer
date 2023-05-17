'use strict';
const statusCode = {
    OK: 200,
    SUCCESS: 201,
    NOT_MODIFIED: 304,
    BAD_PARAMETERS: 400,
    DATA_NOT_FOUND: 404,
    NO_CONTENT: 204,
    MYSQL_ERROR: 507,
    INTERNAL_SERVER_ERROR: 500,

}
const roles = {
    RIDER: "Rider",
    DRIVER: "Driver"
}
const statusDriver={
    ACTIVE:'ACTIVE',
    OCUPED:'OCUPED'
}

module.exports={
    statusCode,
    roles,
    statusDriver
}