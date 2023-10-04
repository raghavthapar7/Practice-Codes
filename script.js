"use strict";

const whereAmI = function (lat, lng) {
  let url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=229125509950868925700x67355`;

  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Some error occured. Please try again after some time. Status - ${response.status}`
        );
      return response.json();
    })
    .then((data) =>
      fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    )
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `The data provided is not accurate. Cannot fetch country. Status - ${response.status}`
        );
      return response.json();
    })
    .then((data) => data[0])
    .then((country) => console.log(country.name.common))
    .catch((err) => console.error(err.message));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
