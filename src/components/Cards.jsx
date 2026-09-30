const Cards = ({ Image, Name, Description, Price }) => {
  return (
    <div>
      <div className="border border-gray-500 rounded-lg">
        <div>
          <img src={Image} alt={Name} className=" rounded-t-lg" />
          <h1 className="text-lg px-3 mt-5">{Name}</h1>
          <h4 className="text-sm px-3 mb-2">{Description}</h4>
          {/* <h3>BDT {Price} Taka</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
