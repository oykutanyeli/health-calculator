import React from 'react';

const RemakeButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Burada yapılacak işlemler varsa ekleyebilirsiniz.
    // Örneğin, mevcut verileri temizleme gibi.
    alert('Ödevi yeniden yapmak için tıkladınız!');
  };

  return (
    <div className="button-container">
      <button className="remake-button" onClick={handleClick}></button>
    </div>
  );
};

export default RemakeButton;
