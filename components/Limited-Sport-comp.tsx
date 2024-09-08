import React from 'react';

const LimitedSpotsSection: React.FC = () => {
  return (
    <section className="bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8">
            Limited Spots Only!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LimitedSpotsSection;
