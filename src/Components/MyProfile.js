import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reducerRockets = useSelector((state) => state.rockets);

  return (
    <div className="container">
      <div className="col-4" />
      <div className="col-4" />
      <div className="col-4">
        <h3>Reserved Rocket</h3>
        <ul>
          {reducerRockets.data && reducerRockets.data.filter((e) => e.reserved === true).map((e) => (
            <li key={e.id}>
              {e.rocket_name}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
