export const request = async (url, method, data) => {
  let headers = {};

  if (!(data instanceof FormData)) {
    headers["content-type"] = "application/json";
  }
  return fetch(url, {
    headers: headers,
    method: method || "GET",
    body: data
      ? data instanceof FormData
        ? data
        : JSON.stringify(data)
      : undefined,
  }).then((res) => res.json());
};
