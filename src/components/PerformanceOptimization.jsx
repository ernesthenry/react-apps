import { useState, memo } from 'react';

const ExpensiveComponent = memo(({ value }) => {
  return <div>{value}</div>;
});

const PerformanceDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <ExpensiveComponent value={text} />
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default PerformanceDemo;
