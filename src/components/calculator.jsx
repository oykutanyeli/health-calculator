import React from "react";
import axios from "axios";

const Calculator = ({ onAddPerson }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const person = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      age: e.target.age.value,
      height: e.target.height.value,
      width: e.target.width.value,
      gender: e.target.gender.value,
    };
    const height = parseFloat(e.target.elements.height.value);
    const width = parseFloat(e.target.elements.width.value);
    person.vki = width / ((height / 100) * (height / 100));

    axios
      .post("http://localhost:5001/calculator", person)
      .then((response) => {
        onAddPerson(response.data);
      })
      .catch((error) => {
        console.error("Error adding person:", error);
      });

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit} className="verigiris">
        <h3>Bilgilerinizi Giriniz</h3>
        <input type="text" placeholder="İsim giriniz" name="name" />
        <input type="text" placeholder="Soyisim giriniz" name="surname" />
        <input type="number" placeholder="yaşınızı giriniz" name="age" />
        <input type="number" placeholder="Boyunuzu giriniz (cm)" name="height" />
        <input type="number" placeholder="Kilo giriniz (kg)" name="width" />
        <select name="gender">
          <option selected>Cinsiyet giriniz </option>
          <option value="female">Kadın</option>
          <option value="male">Erkek</option>
        </select>
        <button type="submit">Ekle</button>
      </form>
    </>
  );
};

export default Calculator;
