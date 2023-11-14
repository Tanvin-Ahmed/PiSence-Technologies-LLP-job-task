import PropTypes from "prop-type";
import data from "../../data/data.json";

const HomeWorks = ({ className }) => {
  return (
    <div className={`${className} p-3 bg-gray-300`} id="homeworks">
      <h3 className="font-semibold text-center text-lg">Homeworks</h3>
      <div className="flex justify-between items-center flex-wrap mt-3">
        {data.homework.map((sub) => (
          <p key={sub} className="uppercase font-semibold m-2">
            {sub}
          </p>
        ))}
      </div>
    </div>
  );
};

HomeWorks.propTypes = {
  className: PropTypes.string,
};

export default HomeWorks;
