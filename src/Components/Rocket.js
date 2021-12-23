import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserved } from '../Redux/rockets/rockets';

function Rocket(props) {
  const { content } = props;
  const dispatch = useDispatch();
  Rocket.defaultProps = {
    flickr_images: 'Loading',
    rocket_name: 'Loading',
    description: 'Loading',
  };
  return (
    <div className="container">
      <div className="rockets-cart grid margin-y-xs">
        <div className="col-4">
          <img className="rocket-img" src={content.flickr_images} alt={content.description} />
        </div>
        <div className="col-8">
          <div className="rockets-content margin-x-xs">
            <h4>{content.rocket_name}</h4>
            <p>{content.description}</p>
            <button className={content.reserved ? 'btn margin-y-xs cancelReserve' : 'btn margin-y-xs'} type="button" onClick={() => { dispatch(reserved(content)); }}>{content.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
          </div>

        </div>
        <hr />

      </div>

    </div>

  );
}
Rocket.propTypes = {
  flickr_images: PropTypes.string,
  rocket_name: PropTypes.string,
  description: PropTypes.string,
};

export default Rocket;
