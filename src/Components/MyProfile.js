import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const MyProfile = () => {
  const reducerRockets = useSelector((state) => state.rockets);

  return (
    <div>
      { reducerRockets.data && reducerRockets.data.filter((e) => e.reserved === true).map((e) => (
        <Rocket key={e.id} content={e} />
      ))}
    </div>
  );
};

export default MyProfile;
