//converts date to yyyy-MM-dd
export const ConvertDate = (date) => {
  const [day, month, year] = date.split("-");
  return year + "-" + month + "-" + day;
};

export const ToIsoFormat = (date, time) => {
  const isoFormat = date + "T" + time;
  return isoFormat;
};
// cleans array from undefined
export const CleanArray = (array) => {
  const cleanArray = array.filter(function (element) {
    return element !== undefined;
  });
  return cleanArray;
};
//creates array with the category ids which are checked
export const CheckedCategoriesIdArray = (checkboxStates) => {
  const checkedCategories = checkboxStates.map((category) =>
    category.checked ? category.id : undefined
  );
  return CleanArray(checkedCategories);
};
