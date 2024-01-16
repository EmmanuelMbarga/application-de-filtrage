/**
 *input sert a integrer du text reçu par l'utilisateur pour faire la recherche
 *@param {string} placeholder
 *@param {string} value
 *@param {(s:string)} onChange

 */

const SearchbarApp = ({searchbar,onChange}) => {


  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => onChange(e.target.value)}
        value={searchbar}
        placeholder="rechercher"
        className="border border-gray-300 bg-gray-100 italic px-2 w-64"
      />
    </div>
  );
};

export default SearchbarApp;
