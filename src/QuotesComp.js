const QuotesComponent = ({ item, counter, addQuotes ,count,data}) => {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex flex-col  items-center justify-center px-5 py-5">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
          style={{ maxWidth: "500px" }}
        >
          {/* <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt=""
              />
            </div>
          </div> */}
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <p className="text-sm text-gray-600 text-center px-5" style={{fontWeight:'bolder'}}>
              {item.quote}
            </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">
              {item.author}
            </p>
            <p className="text-xs text-gray-500 text-center h-[18px]">{count} of {data?.length}</p>
            <div style={{ display: "flex", justifyContent: "center",marginTop:"10px" }}>
              <button  onClick={()=>addQuotes(item?.id)} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Favourite Quotes
              </button>
            </div>
          </div>
        </div>
        <div className="inline-flex mt-10">
          <button
            onClick={() => counter(-1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Prev
          </button>
          <button
            onClick={() => counter(1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default QuotesComponent;
