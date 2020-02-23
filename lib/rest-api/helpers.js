/* eslint no-underscore-dangle: 0 */
import fetch from "cross-fetch";

function assureHostForUrl(url) {
  if (url.startsWith("/")) {
    return `${__crystallizeConfig.HOST_NAME}${url}`;
  }
  return url;
}

export async function doFetch(
  url,
  { body, method = "get", headers = {} } = {}
) {
  let stringifiedBody;

  if (body) {
    stringifiedBody = typeof body === "string" ? body : JSON.stringify(body);
  }

  try {
    const request = await fetch(assureHostForUrl(url), {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers
      },
      body: stringifiedBody
    });

    return request.json();
  } catch (error) {
    console.error(error); // eslint-disable-line
    return {
      success: false
    };
  }
}
