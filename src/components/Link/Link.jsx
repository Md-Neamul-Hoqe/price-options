import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-green-500 hover:text-white hover:font-bold px-3 py-1 max-md:w-full rounded">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Link;
