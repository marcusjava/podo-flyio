module.exports = (field) => {
  return Object.entries(field).map(([key, value]) => ({
    key,
    value: Array.isArray(value) ? value.join(",") : value,
  }));
};
