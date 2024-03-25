const boom = require("@hapi/boom");
//import boom from "@hapi/boom";

const validatorHandler = function (schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
};
module.exports = validatorHandler;
//export default validatorHandler;
