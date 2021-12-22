import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rocketsAction } from '../Redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const reducerRockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reducerRockets.length === 1) {
      dispatch(rocketsAction());
    }
  }, [dispatch]);

  return (
    <div>
      { reducerRockets.data && reducerRockets.data.map((e) => (
        <Rocket key={e.id} content={e} />
      ))}
    </div>
  );
};

export default Rockets;
