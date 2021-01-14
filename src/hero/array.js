const Arr = (start, end) =>  {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
let bigArray =Arr(1, 100); 

export default bigArray;

