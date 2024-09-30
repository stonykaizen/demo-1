import type{ ReactNode } from 'react';

interface MyComponentProps {
  title: string;
  children: ReactNode; // Definimos children como ReactNode
}

const MyComponent: React.FC<MyComponentProps> = ({ title, children }) => {
  return (
    <div className="my-component">
      <h2>{title}</h2>
      <div className="content">
        {children} {/* Aquí renderizamos los children */}
        <p>Holaa</p>
      </div>
    </div>
  );
};

export default MyComponent;
