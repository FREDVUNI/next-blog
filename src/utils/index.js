export const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const makeUpperCase = (word) => {
  return word.toUpperCase();
};

export const shortenDesc = (desc, maxLength) => {
  if (desc.length > maxLength) {
    return desc.substring(0, maxLength - 3) + "...";
  }
  return desc;
};

export const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

export const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
