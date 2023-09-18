import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-green-500/80 px-6 py-1 w-full rounded">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Link;
