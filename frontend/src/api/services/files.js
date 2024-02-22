import { useQuery } from "@tanstack/react-query";
import client from "../client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useGetFilesData: (fileName) =>
    useQuery({
      queryKey: ["getFilesData"],
      queryFn: async () => {
        try {
          if (fileName) {
            return (await client.get("/files/data", { params: { fileName } }))
              .data;
          }
          return (await client.get("/files/data")).data;
        } catch (err) {
          return Promise.reject(err);
        }
      },
    }),
};
