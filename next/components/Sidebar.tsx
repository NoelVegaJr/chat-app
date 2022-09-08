import NamespacePicker from './Namespaces/NamespacePicker';
import RoomsPicker from './Rooms/RoomsPicker';

const Sidebar = ({ className }: { className: string }) => {
  return (
    <div className={`bg-slate-800 ${className}`}>
      <NamespacePicker />
      <RoomsPicker />
    </div>
  );
};

export default Sidebar;
