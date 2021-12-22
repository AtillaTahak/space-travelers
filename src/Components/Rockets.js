import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rocketsAction } from '../Redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const reducerRock = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rocketsAction());
  }, []);

  return (
    <div>
      <ul>
        { reducerRock.data && reducerRock.data.map((e) => (
          <Rocket key={e.id} content={e} />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
