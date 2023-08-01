import Utils from "./Utils";

// const host = "http://216.250.9.249:9002/api";
const host = "/api/v2/";
// const host = "http://localhost:9002/api";

const headers = {
  "User-Agent": "BAYe/WEB/1.0.0",
  Accept: "application/json",
  Device: "web",
  Rank: "ayxezrvjhgpg",
};

function _fetch(uri, opts = {}) {
  return new Promise(function (resolve, reject) {
    const param = new URLSearchParams();
    for (let [key, value] of Object.entries(opts.qs || {})) {
      param.searchParams.append(key, value);
    }
    opts.headers = { ...headers, ...opts.headers };
    const token = Utils.getCookie("f-token");
    if (token) {
      opts.headers["Authorization"] = "Bearer " + token;
    }
    if (
      opts.method === "PUT" ||
      opts.method === "POST" ||
      opts.method === "DELETE" ||
      opts.method === "PATCH"
    ) {
      if (!opts.form) opts.body = JSON.stringify(opts.body);
    }
    fetch(host + uri + "?" + param.toString(), opts)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });
}

export default _fetch;

