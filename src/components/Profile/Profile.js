import style from './Profile.module.css';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return(
      <div className={style.Profile}>
          <ProfileImage/>
          <ProfileInfo/>
      </div>
    );
}

export default Profile;