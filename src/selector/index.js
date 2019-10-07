export const hasFormError = state => {
  const errors = Object.keys(state).map(key => state[key].hasError);
  return errors.includes(true);
};

export const hasFormData = state => {
  const values = Object.keys(state).map(key => state[key].value);
  return !(values.includes("") || values.includes(false));
};
