<h1 align="center">
🌞 WeatherApp - React + TS 🌧
</h1>

## Versión en vivo [Acá](https://affectionate-leakey-88f159.netlify.app/)

### Principales tecnologías-paquetes utilizad@s:
1. React + TypeScript.
2. Styled-Components para estilado general.
3. Redux para el control de estados.
4. Axios para las solicitudes a las APIs.
5. Dayjs para el formateo de fechas.
6. React-icons para la inclusión de iconos.

## Gif de la aplicación desktop y mobile:

![Giphy](https://media.giphy.com/media/gbF13Xmr4HVx82Py7k/giphy.gif)

![Giphy](https://media.giphy.com/media/ntqJltbcpa9H9uIPFM/giphy.gif)

## APIs utilizadas:

[MapBox - Geolocalización](https://www.mapbox.com/)

[OpenWeather - Climas](https://openweathermap.org/api)

## Organización de carpetas:
<details>
  <summary>Completa</summary>

```
my-app/
  README.md
  node_modules/
  package.json
  .env
  public/
    index.html
    favicon.ico
    logo.png
    manifest.json
  src/
    components/
      WeatherIcon.tsx
      CurrentWeather/
        CurrentWeather.tsx
        StyledCurrentWeather.ts
      ForecastSwitch/
        ForecastSwitch.tsx
      ForecastTwoDays/
        ForecastedHour.tsx
        ForecastTwoDays.tsx
        StyledForecastTwoDays.tsx
      ForecastWeek/
        ForecastDay.tsx
        ForecastWeek.tsx
        StyledForecastWeek.ts
      SearchBox/
        SearchBox.tsx
        StyledSearchBox.ts
        Suggestion.tsx
      ThemeToggle/
        ThemeToggle.tsx
        StyledThemeToggle.ts
      Welcome/
        Welcome.tsx
        StyledWelcome.ts
    assets/
      locationIcon.png
      weather/
        weatherIcons.svg
        ...
    helpers/
      hooks/
        useEventListener.ts
        useOnClickOutside.ts
      iconsProvider.ts
      placeSearcher.ts
      unitConvertion.ts
      weatherSearcher.ts
    Interfaces/
      components/
        PlacesInterface.ts
      redux/
        PlaceInterface.ts
        UiInterface.ts
        WeatherInterface.ts
    pages/
      Home.tsx
      StyledHome.tsx
    redux/
      actions/
        placeActions.ts
        uiActions.ts
        weatherActions.ts
      reducers/
        placeReducer.ts
        uiReducer.ts
        weatherReducer.ts
      store/
        store.ts
      types/
        types.ts
    styled/
      themes/
        dark.ts
        light.ts
      global.ts
      styled.d.ts
    styles/
      index.css
    App.tsx
    setupTests.ts
    index.tsx
```
</details>
<details>
  <summary>Abreviada</summary>

```
my-app/
  README.md
  node_modules/
  package.json
  .env
  public/
    index.html
    favicon.ico
    logo.png
    manifest.json
  src/
    components/
      CurrentWeather/
      ForecastSwitch/
      ForecastTwoDays/
      ForecastWeek/
      SearchBox/
      ThemeToggle/
      Welcome/
    assets/
      weather/
    helpers/
      hooks/
    Interfaces/
      components/
      redux/
    pages/
    redux/
      actions/
      reducers/
      store/
      types/
    styled/
      themes/
    styles/
```
</details>

## Modo de ejecución:
```
git clone https://github.com/IvanAriDiPaolo/meteologica-prueba-front.git
```
luego
```
yarn install
```
y finalmente:
```
yarn start
```
Para visualizar la app:
```
http://localhost:3000/
```
