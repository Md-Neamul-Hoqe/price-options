import PropTypes from "prop-types";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-3 text-left">
        <AiFillCheckCircle className="text-green-500"></AiFillCheckCircle>
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
