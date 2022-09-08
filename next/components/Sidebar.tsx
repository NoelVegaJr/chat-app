import { useState } from 'react';
import NamespacePicker from './Namespaces/NamespacePicker';
import RoomsPicker from './Rooms/RoomsPicker';

const Sidebar = ({
  className,
  children,
}: {
  className?: string;
  children: JSX.Element[];
}) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      className={` w-44  bg-slate-800 md:block md:w-52 lg:w-72 ${className} `}
    >
      {children}
    </div>
  );
};

export default Sidebar;
