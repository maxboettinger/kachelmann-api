export class KachelmannAPI {
  apiKey: string;
  headers: any;

  constructor(apiKey: string) {
    this.apiKey = apiKey;

    this.headers = {
      Accept: "application/json",
      "X-API-Key": this.apiKey,
    };

    if (this.apiKey == undefined) {
      throw "No input for API-Key!";
    }
  }

  public getCurrentWeather = async (parameters: ReqParameters) => {
    return new Promise((resolve, reject) => {
      // Validating parameters
      if (
        parameters.lat == undefined ||
        parameters.lon == undefined ||
        parameters.units == undefined
      ) {
        reject("Incorrect ReqParameters provided!");
      }

      // Making the API request
      fetch(
        "https://api.kachelmannwetter.com/v02/current/" +
          parameters.lat +
          "/" +
          parameters.lon +
          "?units=" +
          parameters.units,
        {
          headers: {
            Accept: "application/json",
            "X-API-Key": this.apiKey,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  };

  public get3DayForecast = async (parameters: ReqParameters) => {
    return new Promise((resolve, reject) => {
      // Validating parameters
      if (
        parameters.lat == undefined ||
        parameters.lon == undefined ||
        parameters.units == undefined
      ) {
        reject("Incorrect ReqParameters provided!");
      }

      // Making the API request
      fetch(
        "https://api.kachelmannwetter.com/v02/forecast/" +
          parameters.lat +
          "/" +
          parameters.lon +
          "/3day?units=" +
          parameters.units,
        {
          headers: {
            Accept: "application/json",
            "X-API-Key": this.apiKey,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  };

  public get14DayTrend = async (parameters: ReqParameters) => {
    return new Promise((resolve, reject) => {
      // Validating parameters
      if (
        parameters.lat == undefined ||
        parameters.lon == undefined ||
        parameters.units == undefined
      ) {
        reject("Incorrect ReqParameters provided!");
      }

      // Making the API request
      fetch(
        "https://api.kachelmannwetter.com/v02/forecast/" +
          parameters.lat +
          "/" +
          parameters.lon +
          "/trend14days?units=" +
          parameters.units,
        {
          headers: {
            Accept: "application/json",
            "X-API-Key": this.apiKey,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  };

  public getWeatherSymbol = async (weatherSymbol: string) => {
    return new Promise((resolve, reject) => {
      // Validating parameters
      if (weatherSymbol == undefined) {
        reject("Incorrect weatherSymbol provided!");
      }

      // Making the API request
      fetch(
        "https://api.kachelmannwetter.com/v02/tools/weatherSymbol/" +
          weatherSymbol +
          ".svg",
        {
          headers: {
            Accept: "application/json",
            "X-API-Key": this.apiKey,
          },
        }
      )
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  };
}
