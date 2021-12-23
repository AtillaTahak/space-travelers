import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon } from '../../Redux/dragons'

const Dragon = ({
  id, name, description, image, reserve,
}) => {
  const dispatch = useDispatch();

  const reserveHandler = (e) => {
    dispatch(reserveDragon(e.target.id));
  };

  const cancelHandler = () => {
    dispatch();
  };

  return (
    <div className="grid gap-sm margin-bottom-sm">
      <div className="col-3">
        <img alt="Dragon" src={image} />
      </div>
      <div className="col-9">
        <h3>{name}</h3>

        <p className="padding-y-sm">
          {
            (reserve)
              ? <span className="chip text-sm chip--success margin-right-sm"><i className="chip__label">Reserved</i></span>
              : <span />
          }
          {description}
        </p>
        {
          (reserve)
            ? <button id={id} className="btn btn--lg" type="button" onClick={cancelHandler}>Cancel Reservation</button>
            : <button id={id} className="btn btn--lg" type="button" onClick={reserveHandler}>Reserve Dragon</button>
        }
      </div>
    </div>
  );
};

Dragon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reserve: PropTypes.bool,
};

Dragon.defaultProps = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reserve: PropTypes.bool,
};

export default Dragon;
