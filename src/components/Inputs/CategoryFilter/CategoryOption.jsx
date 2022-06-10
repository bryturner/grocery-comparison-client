function CategoryOption({ value, displayName }) {
  console.log(displayName);
  return <option value={value}>{displayName}</option>;
}

export default CategoryOption;
