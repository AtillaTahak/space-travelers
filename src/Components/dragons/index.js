import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../../Redux/dragons';
import Dragon from './Dragon';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (dragons.length === 0) {
      dispatch(await getDragons());
    }
  }, []);

  return (
    <div className="container margin-y-xs">
      {
        dragons.map((dragon) => (
          <Dragon
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            description={dragon.description}
            image={dragon.image}
            reserve={dragon.reserved}
          />
        ))
      }
    </div>
  );
};

export default Dragons;
