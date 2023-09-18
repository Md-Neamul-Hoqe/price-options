import axios from "axios";
import { useEffect, useState } from "react";
import { Audio, Grid } from "react-loader-spinner";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3 className="text-5xl my-10 text-center">Phones: {phones.length}</h3>
      <BarChart className="mx-auto" width={1200} height={400} data={phones}>
        <Bar dataKey={"price"} fill="#8884d8"></Bar>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
      {loading && (
        <div className="flex justify-center items-center">
          {/* <Audio
            height="150"
            width="150"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          /> */}
          <Grid
            height="150"
            width="150"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default Phones;
