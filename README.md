# kachelmann-api

[![Version](https://img.shields.io/npm/v/kachelmann-api.svg)](https://www.npmjs.com/package/pietsmiet-api)
[![Downloads/week](https://img.shields.io/npm/dw/kachelmann-api.svg)](https://www.npmjs.com/package/kachelmann-api)
[![License](https://img.shields.io/npm/l/pietsmiet-api.svg)](https://github.com/maxboettinger/kachelmann-api/blob/master/package.json)

An (unofficial!) wrapper around the [kachelmannwetter.com](https://kachelmannwetter.com/de) API.

⚠️ Please be aware that you'll need an **paid** [API Key](https://accounts.meteologix.com/products/overview) in order to make any requests. Also, depending on your subscription, some endpoints might not work.

📚 Detailed information about the API can be found in the official [Documentation](https://api.kachelmannwetter.com/v02/_doc.html).

## Installation

```bash
npm install kachelmann-api
```

## Usage

Import the module and initialize a new _KachelmannAPI_ instance with your API-Key.

```js
import KachelmannAPI from "kachelmann-api";

const API = new KachelmannAPI("YOUR_API_KEY");
```

## Endpoints:

With your authenticated _KachelmannAPI_ instance, you can make these requests.

As described above, some endpoints might not be implemented in this module yet, check their official [Documentation](https://api.kachelmannwetter.com/v02/_doc.html) for more information.

### .getCurrentWeather()

Used to access the current weather for a given location. Expects argument of type [ReqParameters](#reqparameters).

```js
const data = await API.getCurrentWeather({
  lat: "50.123",
  lon: "10.123",
  units: "metric",
});
```

**Response:** [View in official Documentation](https://api.kachelmannwetter.com/v02/_doc.html#/operations/get_current_weather)

### .get3DayForecast()

Used to access the current weather for a given location. Expects argument of type [ReqParameters](#reqparameters).

```js
const data = await API.get3DayForecast({
  lat: "50.123",
  lon: "10.123",
  units: "metric",
});
```

**Response:** [View in official Documentation](https://api.kachelmannwetter.com/v02/_doc.html#/operations/get_forecast_3days)

### .get14DayTrend()

Used to access the current weather for a given location. Expects argument of type [ReqParameters](#reqparameters).

```js
const data = await API.get14DayTrend({
  lat: "50.123",
  lon: "10.123",
  units: "metric",
});
```

**Response:** [View in official Documentation](https://api.kachelmannwetter.com/v02/_doc.html#/operations/get_forecast_trend14days)

### .getWeatherSymbol()

Used to access the current weather for a given location. Expects argument of type [ReqParameters](#reqparameters).

```js
const data = await API.getWeatherSymbol("thunderstorm");
```

**Response:** [View in official Documentation](https://api.kachelmannwetter.com/v02/_doc.html#/operations/get_tools_weather_symbol)

## Types:

### ReqParameters

```ts
type ReqParameters = {
  lat: string; // latitude
  lon: string; // longitude
  units: string; // metric OR imperial
};
```

## To-Do

- Implement _Standard Parameters_ and _Advanced Parameters_ endpoints

## Contribute

Feel free to open Pull Requests or Issues to fix bugs or propose new features.
