import './SidebarOption.css';

interface SidebarOptionProps {
  title: string;
  Icon?: any;
}

function SidebarOption({ title, Icon }: SidebarOptionProps) {
  return (
    <div className='sidebarOption'>
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
