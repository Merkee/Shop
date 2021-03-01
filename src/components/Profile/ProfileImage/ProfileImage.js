import style from './ProfileImage.module.css';
import imgProfile from './profile_image_default.png'

const ProfileImage = () => {

  const clickHandler = (e) => {
    let reader = new FileReader();
    let imagePreviewUrl;

    reader.onloadend = () => {
      e.preventDefault();
      imagePreviewUrl = reader.result;
    }
    reader.readAsDataURL(imagePreviewUrl);
  }

    return(
      <div className={style.ProfileImage}>
          <img src={imgProfile} className={style.ImageIcon}/>
          <button className={style.UpdateButton} onClick={() => clickHandler()}>Сменить фото</button>
      </div>
    );
}

export default ProfileImage;