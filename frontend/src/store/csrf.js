import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
  options.method = options.method || 'GET';
  // set options.method to 'GET' if there is no method
  options.headers = options.headers || {};
  // set options.headers to an empty object if there is no headers

  if (options.method.toUpperCase() !== "GET") {
    if (options.headers["Content-Type"] === "multipart/form-data") {
      delete options.headers["Content-Type"];
    } else {
      options.headers["Content-Type"] =
        options.headers["Content-Type"] || "application/json";
    }
    options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
  }
    // if the options.method is not 'GET', then set the "Content-Type" header to
      // "application/json", and set the "XSRF-TOKEN" header to the value of the
      // "XSRF-TOKEN" cookie
    const res = await window.fetch(url, options);
    // call the default window's fetch with the url and the options passed in

    if (res.status >= 400) throw res;
    // if the response status code is 400 or above, then throw an error with the
    // error being the response

    return res;
    // if the response status code is under 400, then return the response to the
      // next promise chain
  }

  export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
  }
