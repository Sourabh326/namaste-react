import { CDN_LINK } from "../utils/constants";

const ItemList = ({ items }) => {
  
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="menu-item border-gray-200 border-b-2 py-5 flex justify-between" key={item.card.info.id}>
            <div className="left-item w-[75%]">
              <h2 className="text-md text-slate-700 font-semibold">{item.card.info.name}</h2>
              <h5 className="text-sm text-gray-600 mt-2">Rs. {item.card.info.price / 100}</h5>
              <p className="text-sm text-gray-500"> {item.card.info.description} </p>
            </div>
            <div>
                {
                    item.card.info.imageId && 
                    <img
                      src={CDN_LINK + item.card.info.imageId}
                      className="w-[100px] h-[80px] rounded-md"
                    />
                }
                {
                    item.card.info.imageId ?
                    <button className="bg-white text-green-600 shadow-md px-4 py-2 border border-green-600 rounded-lg bottom-3 relative font-semibold left-4 text-sm hover:bg-gray-50">Add +</button>
                    :
                    <button className="bg-white text-green-600 shadow-md px-4 py-2 border border-green-600 rounded-lg font-semibold text-sm hover:bg-gray-50">Add +</button>

                }
   
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
