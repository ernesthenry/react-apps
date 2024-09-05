import { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="tabs">
        {children.map((child, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {children[activeIndex]}
      </div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab };
