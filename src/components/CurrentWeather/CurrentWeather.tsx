import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import dayjs from 'dayjs';

import { StyledCurrentWeather } from './StyledCurrentWeather';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import { WeatherIcon } from '../WeatherIcon';

export const CurrentWeather: React.FC = () => {
  const { current } = useSelector((state: RootState) => state.WeatherInterface)
  const { selectedPlace } = useSelector((state: RootState) => state.placeInterface)
  const { dt, feelsLike, temp, main, id, icon } = current;
  const date = dayjs(new Date(dt * 1000))

  return (
    <StyledCurrentWeather>
      <div id='info'>
        <div>
          <h1>{
            isNaN(selectedPlace.name.split(',')[0])
              ? selectedPlace.name.split(',')[0]
              : selectedPlace.name.split(',')[1]
          }</h1>
          <p>{date.format('MMM, dddd YYYY')}</p>
        </div>
        <h3>{date.format('HH:mm')}</h3>
      </div>
      <div id='weather'>
        <p>Today</p>
        <div id='temperature'>
          <div>
            <WeatherIcon id={id} icon={icon} size={100} />
            <h5>{main}</h5>
          </div>
          <div>
            <h4><span>Feels-Like:</span> {kelvinToCelcius(feelsLike)}°</h4>
            <h5><span>Temperature:</span> {kelvinToCelcius(temp)}°</h5>
          </div>
        </div>
      </div>
    </StyledCurrentWeather>
  )
}
