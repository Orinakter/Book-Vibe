import React from 'react';

const BannerSection = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co.com/Wtg3ZjZ/books.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold w-[530px] h-[150px]">Books to freshen up your bookshelf</h1>
      
      <button className="btn bg-green-500 text-white">View The List</button>
    </div>
  </div>
</div>
    );
};

export default BannerSection;