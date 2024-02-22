import api from "./apiService.js";

const getFileList = async (filter) => {
  try {
    const request = await api.get("./files");
    const files = request.data.files;

    if (filter) {
      const fileSearch = files.find((file) => file === filter);
      if (fileSearch) {
        return [fileSearch];
      }
    }

    return files;
  } catch (err) {
    throw new Error(err);
  }
};

export default getFileList;
