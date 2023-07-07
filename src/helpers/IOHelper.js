export const readAllText = (files, callback, errorCallback) => {
  if (!files || files.length !== 1) return undefined;
  let file = files[0];
  if (file.type && !file.type.startsWith("log")) {
    errorCallback(`File is not a [.log] this type: ${file.type}, reload page and try again`)
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", callback);

  reader.readAsText(file);
};
