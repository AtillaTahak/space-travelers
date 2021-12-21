import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rocketsAction } from '../Redux/rockets/rockets';

const Rockets = () => {
  const reducerRock = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rocketsAction());
  }, []);

  return (
    <div>
      <ul>
        {reducerRock.data && reducerRock.data.map((e) => (
          <li key={e.id}>{e.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
