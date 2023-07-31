import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import { ReactComponent as FileButton } from "../../Assets/picture.svg";

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm("number");
  const age = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();
  const fileRef = React.useRef();

  React.useEffect(() => {
    if (data) navigate("/account");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("peso", weight.value);
    formData.append("idade", age.value);

    console.log(formData);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function buttonFile(event) {
    event.preventDefault();
    fileRef.current.click();
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" name="name" {...name} />
        <Input label="Weight (kg)" type="number" name="weight" {...weight} />
        <Input label="Age" type="number" name="age" {...age} />
        <div className={styles.buttonWrapper}>
          <button className={styles.buttonFile} onClick={buttonFile}><FileButton /></button>
        </div>
        <input
          className={styles.inputFile}
          ref={fileRef}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? <Button disabled>Loading...</Button> : <Button>Send</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
