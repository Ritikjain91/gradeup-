import React from 'react';
import { useNavigate } from 'react-router-dom';

const Scrollbar = () => {
  const navigate = useNavigate();

  const topics = ['Javascript', 'React JS', 'DBMS SQL','MongoDB','Node.js','Express.js','Python','Django '];

  return (
    <div>
      <div className="flex flex-row gap-4">
        {topics.map((topic, index) => (
          <p
            key={index}
            onClick={() => navigate(`/${topic.toLowerCase().replace(' ', '')}`)}
            className="text-lg font-bold cursor-pointer border-b-2 border-blue-500 pb-1"
          >
            {topic}

            {topic !== 'Javascript' && (
              <span className="ml-2 inline-block rounded-full bg-red-500 px-2 py-1 text-xs text-white animate-pulse">
                Coming Soon
              </span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Scrollbar;