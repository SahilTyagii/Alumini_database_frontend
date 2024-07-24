import React from 'react';

const LandingPage = ({ activeTab, onTabChange }) => {
  return (
    <div className="mt-20 grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <div className="flex w-full divide-x divide-gray-800">
        <button
          className={`align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-r-none border-r-0 ${
            activeTab === 'albums' ? 'bg-blue-600' : ''
          }`}
          type="button"
          onClick={() => onTabChange('albums')}
        >
          Albums
        </button>
        <button
          className={`align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-r-none border-r-0 rounded-l-none ${
            activeTab === 'videos' ? 'bg-blue-600' : ''
          }`}
          type="button"
          onClick={() => onTabChange('videos')}
        >
          Videos
        </button>
        <button
          className={`align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-l-none ${
            activeTab === 'allPhotos' ? 'bg-blue-600' : ''
          }`}
          type="button"
          onClick={() => onTabChange('allPhotos')}
        >
          All Photos
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
