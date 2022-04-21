import "./Tab.css";
const Tab = (props) => {
  const {
    details: { id, prefix, label },
    activeTab,
    onClick,
    idx,
  } = props;

  return (
    <li
      className={`Tab ${activeTab === idx ? "active" : ""}`}
      onClick={() => onClick(idx)}
    >
      {label}
    </li>
  );
};
export default Tab;
