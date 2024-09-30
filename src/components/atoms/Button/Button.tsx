import type { ReactNode } from 'react';

interface ButtonProps {
  // Definimos la propiedad children como ReactNode
  children: ReactNode; // Definimos children como ReactNode
}
 // Definimos el componente Button
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="flex justify-center items-center gap-2.5 p-2.5 p-2 w-[8.75rem] bg-red text-red font-['Inter'] font-medium leading-6">
 {children}
</button>
  );
};

export default Button;
