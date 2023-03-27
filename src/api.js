import itemArray from "./items";

const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemArray);
      }, 1000);
    });
  };
  
  export { fetchData };