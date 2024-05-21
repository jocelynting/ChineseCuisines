import "../../styles/Contact.css";
import { useState } from "react";

function Contact() {
  const [subject, setSubject] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    recipeName: "",
    ingredients: "",
    instructions: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!subject) {
      errors.subject = "Please select a subject";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSuccess(true);
    }
  };

  const showFormContent = (selectedSubject) => {
    if (selectedSubject === "recipe") {
      return (
        <div className="contact__recipe">
          <div className="contact__recipe-name">
            <label className="contact__label" htmlFor="recipe-name">
              Recipe Name:
            </label>
            <input
              className="contact__input"
              id="recipe-name"
              name="recipeName"
              value={formData.recipeName}
              onChange={handleInputChange}
            />
          </div>
          <div className="contact__recipe-ingredients">
            <label className="contact__label" htmlFor="recipe-ingredients">
              Ingredients:
            </label>
            <textarea
              className="contact__textarea"
              id="recipe-ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleInputChange}
              rows="5"
            ></textarea>
          </div>
          <div className="contact__recipe-instructions">
            <label className="contact__label" htmlFor="recipe-instructions">
              Instructions:
            </label>
            <textarea
              className="contact__textarea"
              id="recipe-instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleInputChange}
              rows="5"
            ></textarea>
          </div>
        </div>
      );
    } else if (selectedSubject === "message") {
      return (
        <div className="contact__message">
          <label className="contact__label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="contact__textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
          ></textarea>
        </div>
      );
    }
  };

  return (
    <>
      {success ? (
        <div className="contact__success">
          <h2 className="contact__success-title">Success 🎉</h2>
          <p className="contact__success-content">
            Thank you for your submission!
          </p>
        </div>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__name">
            <label className="contact__label" htmlFor="name">
              Name:<span className="contact__required"> *</span>
            </label>
            <div className="contact__name-info">
              <input
                className="contact__input"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="contact__error-message">{errors.name}</p>
              )}
            </div>
          </div>
          <div className="contact__email">
            <label className="contact__label" htmlFor="email">
              Email: <span className="contact__required"> *</span>
            </label>
            <div className="contact__email-info">
              <input
                className="contact__input"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="contact__error-message">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="contact__subject">
            <label className="contact__label" htmlFor="subject">
              Subject: <span className="contact__required"> *</span>
            </label>
            <div className="contact__subject-info">
              <select
                className="contact__select"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="">Please select a subject</option>
                <option value="message">Leave a message</option>
                <option value="recipe">Upload a recipe</option>
              </select>
              {errors.subject && (
                <p className="contact__error-message">{errors.subject}</p>
              )}
            </div>
          </div>
          {showFormContent(subject)}
          <button className="contact__submit" type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
}

export default Contact;
