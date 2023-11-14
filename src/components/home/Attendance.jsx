import data from "../../data/data.json";

const Attendance = () => {
  return (
    <div className="my-3" id="attendance">
      <h3 className="text-xl font-semibold text-center tracking-wider mb-3">
        ATTENDANCE
      </h3>

      <div className="overflow-x-auto w-full">
        <table className="w-full">
          <thead>
            <tr>
              <th></th>
              {Object.entries(data.ATTENDANCE).map((attendance, i) => (
                <th key={i}>
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-lg font-semibold capitalize">
                      {attendance[0]}
                    </h1>
                    <small className="block text-[12px] text-gray-800">
                      {attendance[1].date}
                    </small>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3">
                <h3 className="text-xl font-semibold">FN</h3>
              </td>
              {Object.entries(data.ATTENDANCE).map((attendance, i) => (
                <td key={i} className="py-3">
                  <div className="flex justify-center items-center">
                    {attendance[1].fn === "present" ? (
                      <div className="w-8 h-8 bg-green-600" />
                    ) : (
                      <div className="w-8 h-8 bg-red-600" />
                    )}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3">
                <h3 className="text-xl font-semibold">AN</h3>
              </td>
              {Object.entries(data.ATTENDANCE).map((attendance, i) => (
                <td key={i} className="py-3">
                  <div className="flex justify-center items-center">
                    {attendance[1].an === "present" ? (
                      <div className="w-8 h-8 bg-green-600" />
                    ) : (
                      <div className="w-8 h-8 bg-red-600" />
                    )}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="grid grid-cols-6 p-3 bg-gray-300 overflow-x-auto">
        <div className="flex flex-col justify-end items-center space-y-2">
          <h3 className="text-xl font-semibold">FN</h3>
          <h3 className="text-xl font-semibold">AN</h3>
        </div>
        {Object.entries(data.ATTENDANCE).map((attendance, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center space-y-2 min-w-[100px]"
          >
            <h1 className="text-lg font-semibold capitalize">
              {attendance[0]}
            </h1>
            <small className="block">{attendance[1].date}</small>
            <div className="w-8 h-8 bg-red-600" />
            <div className="w-8 h-8 bg-green-600" />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Attendance;
