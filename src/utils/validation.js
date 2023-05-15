const validationRider = (request) => {
    return !!request &&!!request.idRider && !!request.latitude && !!request.logitude;
}
module.exports={
    validationRider
}