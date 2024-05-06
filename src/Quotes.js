import { useEffect, useState } from "react";
import QuotesComponent from "./QuotesComp";
import FavComp from "./FavQuotes";

const Quotes = () => {
  const [data, setData] = useState();
  const [count, setCount] = useState(1);
  const [addFavQuotes, setAddFavQuotes] = useState([]);
  const [seeFavList, setSeeFavList] = useState(false);

  console.log(count, "count");

  const fetchAdvice = () => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data?.quotes);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const counter = (num) => {
    setCount(count + num);
  };

  const addQuotes = (id) => {
    debugger;
    const favItem = data?.find((item) => item.id === id);
    if (addFavQuotes?.includes(favItem)) {
      alert("already added");
    } else {
      setAddFavQuotes([...addFavQuotes, favItem]);
    }
    console.log(addFavQuotes, favItem, id, "favItem");
  };

  return (
    <div>
      {!seeFavList &&
        data?.slice(count - 1, count)?.map((item) => {
          return (
            <div key={item?.id}>
              {addFavQuotes?.length}
              <QuotesComponent
                addQuotes={addQuotes}
                item={item}
                counter={counter}
                data={data}
                count={count}
                setSeeFavList={setSeeFavList}
                addFavQuotes={addFavQuotes}
              />
            </div>
          );
        })}

      {seeFavList &&
        addFavQuotes?.map((item) => {
          return (
            <div key={item.id}>
              <FavComp item={item} />;
            </div>
          );
        })}
     {seeFavList && <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setSeeFavList(false)}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          See Quotes
        </button>
      </div>}
    </div>
  );
};

export default Quotes;
