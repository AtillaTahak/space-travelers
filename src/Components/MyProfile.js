import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reducerRockets = useSelector((state) => state.rockets);
  const dragons = useSelector((state) => state.dragons);
  const missions = useSelector((state) => state.missions.missions);

  return (
    <div className="container">
      <div className="grid">
        <div className="col-4">
          <h3>Reserved Dragons</h3>
          <ul>
            {dragons && dragons.filter((e) => e.reserved === true).map((e) => (
              <li key={e.id}>
                {e.name}
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <h3>Reserved Missions</h3>
          <ul>
            {missions && missions.filter((e) => e.reserved === true).map((e) => (
              <li key={e.id}>
                {e.name}
                <hr />
              </li>
            ))}
          </ul>
        </div>
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

    </div>
  );
};

export default MyProfile;
