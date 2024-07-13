import { axiosInstance } from "@lib/axios";

const FILES = "/files";

export const postImageUploadApud = async (
  postId: string,
  formData: FormData
): Promise<any> => {
  const url = `${FILES}/feed/upload/${postId}`;

  return axiosInstance.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
