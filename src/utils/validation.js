const validationRider = (request) => {
    return !!request &&!!request.idRider && !!request.latitude && !!request.longitude;
}
const validationDriver = (request) => {
    return !!request &&!!request.idDriver && !!request.latitude && !!request.longitude;
}
module.exports={
    validationRider,
    validationDriver
}