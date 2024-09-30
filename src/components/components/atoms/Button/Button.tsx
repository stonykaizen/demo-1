import type { ReactNode } from 'react';

interface MyComponentProps {
  title: string;
  children: ReactNode; // Definimos children como ReactNode
}

const MyComponent: React.FC<MyComponentProps> = ({ title, children }) => {
  return (
    <button className="flex justify-center items-center gap-2.5 p-2.5 p-2 w-[8.75rem] bg-[#2f40a0] text-white font-['Inter'] font-medium leading-6">
 {children}
</button>
  );
};

export default MyComponent;
