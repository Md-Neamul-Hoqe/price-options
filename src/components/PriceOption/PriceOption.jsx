import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg text-center flex flex-col">
      <h2>
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-3xl my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-10 bg-green-600 w-full py-2 text-xl font-bold rounded-lg hover:bg-green-800">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
