module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['expo',"@babel/env","@babel/react"],
  };
};
