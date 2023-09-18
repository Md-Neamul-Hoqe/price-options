import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: "1a2b3c4d",
      name: "Basic Membership",
      description: "Access to gym facilities during off-peak hours",
      price: 29.99,
      features: [
        "Access to cardio and weight training areas",
        "Locker room access",
        "Limited access during peak hours",
        "Monthly fitness assessment",
      ],
    },
    {
      id: "5e6f7g8h",
      name: "Premium Membership",
      description: "Unlimited access to gym facilities at all times",
      price: 49.99,
      features: [
        "24/7 gym access",
        "Access to all gym classes",
        "Personal trainer sessions (2x/month)",
        "Monthly fitness assessment",
        "Sauna and steam room access",
      ],
    },
    {
      id: "9i0j1k2l",
      name: "Student Membership",
      description: "Special discounted rate for students",
      price: 19.99,
      features: [
        "Access to cardio and weight training areas",
        "Locker room access",
        "Limited access during peak hours",
        "Student ID required",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl font-black py-12 text-center">Best Prices in the town</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
