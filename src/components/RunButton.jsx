// RunButton.jsx
import React, { useState } from 'react';
import surpriseImage from '../assets/surprise.jpg'; // Resmi doğru yoldan içe aktarın

const RunButton = () => {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [showImage, setShowImage] = useState(false); // Resmin görünürlüğü için durum ekleyin

  const handleMouseEnter = () => {
    const newTop = Math.random() * 80 + 10 + '%';
    const newLeft = Math.random() * 80 + 10 + '%';
    setPosition({ top: newTop, left: newLeft });
  };

  const handleClick = () => {
    setShowImage(true); // Butona tıklandığında resmi göster
  };

  return (
    <div className="run-button-container">
      <p>Ödevi beğenmediyseniz veya eksik bulduysanız aşağıdaki butona tıklayarak bildiriniz. </p>
      <button 
        className="run-button" 
        style={{ top: position.top, left: position.left }}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick} // Butona tıklandığında handleClick fonksiyonunu çağır
      >
        Yeniden yap
      </button>
      {showImage && (
        <img src={surpriseImage} alt="Surprise" className="surprise-image" />
      )}
    </div>
  );
};

export default RunButton;
