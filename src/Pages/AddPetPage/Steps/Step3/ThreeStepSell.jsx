import next from '../../../../Components/SvgIcons/next.svg';
import cancel from '../../../../Components/SvgIcons/cancel.svg';
import PetAdd from '../../../../Components/SvgIcons/PetAdd.svg';
import female from '../../../../Components/SvgIcons/female.svg';
import male from '../../../../Components/SvgIcons/male.svg';
import React, { useState } from 'react';
import css from './ThreeStep.module.css';

// import { useNavigate } from 'react-router-dom';
// import * as yup from 'yup';

// const validationSchema = yup.object().shape({
//   photo: yup.string().required('Please upload a photo'),
//   comments: yup.string().required('Please enter comments'),
// });

const ThreeStepSell = ({ handleNext, handlePreviousStep }) => {
  const [photo, setPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [setSex] = useState('');
  const [errors] = useState({});
  const [activeButton, setActiveButton] = useState(null);
  // const navigate = useNavigate();

  //   const handleDone = () => {
  //     // validationSchema
  //     //   .validate({ photo, comments }, { abortEarly: false })
  //     //   .then(() => {
  //     //     // Отправка запроса на бекенд для створення картки або оголошення

  //     //     // Успішне створення картки, переадресація користувача
  //     //     navigate('/UserPage'); // або '/NoticesPage' залежно від категорії

  //     //     // Якщо отримано помилку від бекенду
  //     //     // Виведення повідомлення про помилку у вигляді нотіфікації
  //     //   })
  //     //   .catch(err => {
  //     //     const validationErrors = {};
  //     //     err.inner.forEach(error => {
  //     //       validationErrors[error.path] = error.message;
  //     //     });
  //     //     setErrors(validationErrors);
  //     //   });
  //   };

  const handleOptionChange = (option, number) => {
    setSex(option);
    setActiveButton(number);
  };

  const handleFileChange = e => {
    setPhoto(e.target.files[0]);
  };
  return (
    <>
      <div className={css.wrapperForm}>
        <div className={css.wrapperPotoSell}>
          <div className={css.SexText}>The Sex</div>
          <ul className={css.sexOption}>
            <li>
              <button
                className={`${css.sexElement} ${
                  activeButton === 1 ? css.sexElementActive : ''
                }`}
                type="button"
                onClick={() => handleOptionChange('female', 1)}
              >
                <img src={female} alt="female" />
                Female
              </button>
            </li>
            <li>
              <button
                className={`${css.sexElement} ${
                  activeButton === 2 ? css.sexElementActive : ''
                }`}
                onClick={() => handleOptionChange('male', 2)}
              >
                <img src={male} alt="male" />
                Male
              </button>
            </li>
          </ul>
          <div className={css.wrapperAddPhoto}>
            <label className={css.labelAddText}>Load the pet’s image:</label>

            <input
              type="file"
              id="photo"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />

            <label htmlFor="photo">
              <div className={css.labelAdd}>
                {photo && (
                  <img
                    className={css.previewPhoto}
                    src={URL.createObjectURL(photo)}
                    alt="Selected img"
                  />
                )}
                <img className={css.iconAdd} src={PetAdd} alt="add" />
              </div>
            </label>
            {errors.photo && <p>{errors.photo}</p>}
          </div>
        </div>
        <div className={css.wrapperFormSellInputs}>
          <div className={css.labelInput}>
            <label className={css.LabelStep} htmlFor="name">
              Location
            </label>
            <input
              className={css.Input}
              type="text"
              id="name"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="Type of location"
            />
            {errors.name && <p className={css.ErrorTextLow}>{errors.name}</p>}
          </div>
          <div className={css.labelInput}>
            <label className={css.LabelStep} htmlFor="name">
              Price
            </label>
            <input
              className={css.Input}
              type="text"
              id="name"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Type of price"
            />
            {errors.name && <p className={css.ErrorTextLow}>{errors.name}</p>}
          </div>
          <div className={css.wrapperTextarea}>
            <label className={css.textareaText} htmlFor="comments">
              Comments
            </label>
            <textarea
              className={css.textareaAdd}
              id="comments"
              value={comments}
              placeholder="Type breed"
              onChange={e => setComments(e.target.value)}
            />
            {errors.comments && <p>{errors.comments}</p>}
          </div>
        </div>
      </div>
      <ul className={css.LinkAddPEt}>
        <li>
          <button
            className={css.LinkAddPEtLitkCancel}
            onClick={handlePreviousStep}
          >
            <div className={css.ButtonEl}>
              <img src={cancel} alt="Next" />
              <span>Back</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext} onClick={handleNext}>
            <div className={css.ButtonEl}>
              <span>Done </span>
              <img src={next} alt="Next" />
            </div>
          </button>
        </li>
      </ul>
    </>
  );
};

export default ThreeStepSell;
