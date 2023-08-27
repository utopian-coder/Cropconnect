module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next); //catch(next) is equivalent to catcch(err => next(err))
  };
};
