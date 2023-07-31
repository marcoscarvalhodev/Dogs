import React from "react";
import styles from "./PhotoContent.module.css";
import {Link} from "react-router-dom";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helper/Image";

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext)
  const { photo, comments } = data;
  console.log(data);

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id}/>: <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>}
            
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>

          <h1 className='title'><Link to={`/photo/${photo.id}`}>{photo.title}</Link></h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade > 1 ? `${photo.idade} years old` : `${photo.idade} year old`}</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments}/>
    </div>
  );
};

export default PhotoContent;
