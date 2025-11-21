// 在react中，我们使用React.FC来描述一个函数式组件

import * as React from 'react';

interface HomeProps {
  owner: string;
}

const Home: React.FC<HomeProps> = ({ owner }) => {
  return <>Home of {owner}</>;
};

const App1: React.FC = () => {
  // √
  return <Home owner='me' />;
};

const App2: React.FC = () => {
  // X 不能将类型“number”分配给类型“string”。
  return <Home owner={599} />;
};

// 状态管理，useState
function App() {
  const [count, setCount] = useState(0)
  return <></>
}
// 可以自动推到，但是数组就不行了

function App() {
  // never[]
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    // x，对于每个元素，都会提示 不能将类型“number”分配给类型“string”。
    setList([1, 2, 3]);
  });

  return <></>;
}

// useRef 中也允许你传入一个类型参数，比如我们最常见的使用 ref 来存储 DOM 元素

const Container = () => {
  const domRef = useRef<HTMLDivElement>(null);

  const operateRef = () => {
    // element 能被推导为 HTMLDivElement | null 类型
    domRef.current?.getBoundingClientRect();
  };

  return <div ref={domRef}></div>;
};