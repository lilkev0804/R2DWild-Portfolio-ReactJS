import bigArray from './array'
import Star from './star'

const DuplicateStar = bigArray.map((star , i)  =>
  
  <Star key={i}
  class= 'star'
  ></Star>
);



export default DuplicateStar