import api from "./apiService.js";
import getFileList from "./getFileList.js";

const getFilesData = async (filter) => {
  try {
    const files = await getFileList(filter);
    let apiCalls = [];
    console.log(files);
    for (const file of files) {
      console.log(file);
      apiCalls.push(api.get(`/file/${file}`));
    }

    const filesData = await Promise.allSettled(apiCalls);

    const result = [];

    for (const file of filesData) {
      if (file.status === "fulfilled") {
        const text = file.value.data;

        const lines = text.split("\n");
        console.log(lines);
        // First line is the header
        // Check that every line has 4 values to make sure the file is formatted correctly
        // I'm asuming the data is coming correctly when there is 4 values in a line, not validating hex
        // We know that a correct line will be in this order: file, text, number, hex
        if (lines.length > 1) {
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].split(",").filter((data) => data.length >= 1);

            if (line.length === 4) {
              result.push({
                file: line[0],
                text: line[1],
                number: line[2],
                hex: line[3],
              });
            }
          }
        }
      }
    }

    return result;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export default getFilesData;
