const BASE_URL = "https://sample-cast-api.herokuapp.com/shows/";
// 185226/episodes/29314799";

let headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json"
});

const request = (url, method = "GET", body = null) =>
  fetch(url, {
    method: method,
    body: body,
    headers: headers
  });

const Show = {
  get: id => request(BASE_URL + id)
};

const Episodes = {
  all: showId => request(BASE_URL + showId + "/episodes/"),
  get: (showId, episodeId) =>
    request(BASE_URL + showId + "/episodes/" + episodeId)
};

export { Show, Episodes };
