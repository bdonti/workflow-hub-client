import useOpinions from "../../../hooks/useOpinions";

const VisitorOpinions = () => {
  const [opinions] = useOpinions();
  //console.log(opinions);
  return (
    <div>
      <div className="mt-10 mx-5 lg:mx-0">
        <p className="text-sm text-[#eb6ca9] text-center font-bold">Opinions</p>
        <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-20 text-center">
          Check Visitor Feedbacks
        </h3>
      </div>
      <div className="overflow-x-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Visitor Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Visitor Comment
                </th>
              </tr>
            </thead>
            <tbody>
              {opinions.map((opinion, idx) => (
                <tr
                  key={opinion._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{idx + 1}</td>
                  <td className="px-6 py-4">{opinion.email}</td>
                  <td className="px-6 py-4">{opinion.opinions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VisitorOpinions;
