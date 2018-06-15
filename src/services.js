const BASE_URL = "https://api.breaker.audio/shows/185226/episodes";

let headers = new Headers({
  Accept: "application/json",
  "User-Agent": "Breaker/1.0.0 (0)"
});

const castFetch = (url, method = "GET", body = {}) =>
  fetch(url, {
    method: method,
    body: body,
    headers: headers,
    "cross-domain": true,
    mode: "no-cors"
  });

const Episodes = {
  all: () => castFetch(BASE_URL),
  id: id => castFetch(BASE_URL + id)
};

export { Episodes };
