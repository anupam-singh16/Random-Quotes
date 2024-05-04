import { useEffect, useState } from "react";
import QuotesComponent from "./QuotesComp";

const Quotes = () => {
  const [data, setData] = useState();
  const [count, setCount] = useState(1);
  const [addFavQuotes, setAddFavQuotes] = useState([]);
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
    if (num === 0) {
      return;
    }
    setCount(count + num);
  };

  const addQuotes = (id) => {
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
      {data?.slice(count > 0 && count - 1, count)?.map((item) => {
        return (
          <div key={item.id}>
            {addFavQuotes?.length}
            <QuotesComponent
              addQuotes={addQuotes}
              item={item}
              counter={counter}
              data={data}
              count={count}
            />
          </div>
        );
      })}

      {addFavQuotes?.map((item) => {
        return <p>{item.author}</p>;
      })}
    </div>
  );
};

export default Quotes;
