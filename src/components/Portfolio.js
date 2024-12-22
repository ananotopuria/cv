import React, { forwardRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import card1 from '../assets/images/card1.jpg';
import card from '../assets/images/card3.png';

const portfolioData = [
  {
        title: 'Project 1',
        category: 'Code',
        description:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
        image: card1,
        link: 'https://example.com/source1',
      },
      {
        title: 'Project 2',
        category: 'UI',
        description:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
        image: card,
        link: 'https://example.com/source2',
      },
      {
        title: 'Project 3',
        category: 'Code',
        description:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
        image: card1,
        link: 'https://example.com/source3',
      },
      {
        title: 'Project 4',
        category: 'UI',
        description:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
        image: card,
        link: 'https://example.com/source4',
      },
];

const Portfolio = forwardRef(({ collapsed }, ref) => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setData(portfolioData);
  }, []);

  const displayData = data.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <div ref={ref} className={`container ${collapsed ? 'hidden' : 'block'}`}>
      <ul className="mt-5 flex space-x-5 text-base">
        <li
          className={`cursor-pointer ${
            activeTab === 'all' ? 'text-[#26c17e]' : 'text-black'
          }`}
          onClick={() => setActiveTab('all')}
        >
          All
        </li>
        <li
          className={`cursor-pointer ${
            activeTab === 'UI' ? 'text-[#26c17e]' : 'text-black'
          }`}
          onClick={() => setActiveTab('UI')}
        >
          UI
        </li>
        <li
          className={`cursor-pointer ${
            activeTab === 'Code' ? 'text-[#26c17e]' : 'text-black'
          }`}
          onClick={() => setActiveTab('Code')}
        >
          Code
        </li>
      </ul>
      <section className="mt-4 mr-[1rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {displayData.map((item, index) => (
            <article
              key={index}
              className="group relative rounded-lg transition duration-300 ease-in-out hover:shadow-lg transform group-hover:scale-95"
            >
              <div className="h-30 bg-cover bg-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full group-hover:hidden"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 flex translate-y-20 transform items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-center">
                  <h2 className="ml-5 pb-3 text-left text-sm/[16px] font-semibold text-[#26c17e]">
                    {item.title}
                  </h2>
                  <p className="ml-5 pb-2 text-start text-sm text-gray-700">
                    {item.description}
                  </p>
                  <div className="pl-5 text-left text-sm">
                    <Link to={item.link} target="_blank" className=" text-[#26c17e]">
                      View source
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
});

export default Portfolio;
