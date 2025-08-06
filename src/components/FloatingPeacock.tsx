import React from 'react';

const GeetaShloka: React.FC = () => {
  return (
    <>
      {/* Geeta Shloka */}
      <div className="geeta-shloka">
        <div className="shloka-container">
          <div className="shloka-text">
            <p className="sanskrit">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।</p>
            <p className="sanskrit">मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥</p>
            <p className="translation">"You have the right to work only, but never to its fruits."</p>
            <p className="translation">"Let not the fruits of action be your motive, nor let your attachment be to inaction."</p>
            <p className="source">— Bhagavad Gita 2:47</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeetaShloka; 