import { doFetch } from "./helpers";

export const sendMail = async input => {
  const response = await doFetch(`api/sendmail/book`, {
    method: "post",
    body: input
  });
  return response;
};

export const getFbPosts = async () => {
  const response = await doFetch("api/facebook/get", { method: "post" });
  return response;
};
