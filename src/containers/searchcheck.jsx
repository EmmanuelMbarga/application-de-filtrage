

const SearchCheckApp = ({checkedbox1,onChange}) => {


  return (
    <div className="my-2">
      <input
        type="checkbox"
        name="boxchek"
        id="boxchek"
        checked={checkedbox1}
        onChange={(e)=>onChange(e.target.checked)}
        className="mr-1"
      />
      <label htmlFor="boxchek" className="text-xs -mt-2">
        {"n'afficher"} que les produits en stock
      </label>
    </div>
  );
};

export default SearchCheckApp;
