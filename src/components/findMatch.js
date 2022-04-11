import FindMatch_card from './findMatch_card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';

const FindMatch = () => {
  return (
    <div>
      <div className=" 2xl:mx-auto 2xl:container mx-4  ">
        <Navbar />
        <FindMatch_card />
      </div>
    </div>
  );
};

export default FindMatch;
