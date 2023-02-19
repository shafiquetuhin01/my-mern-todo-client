import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Todo = () => {
  const [itemText, setItemText] = useState('');
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setUpdateItemText] = useState('');
  const [listItems, setListItems] = useState([]);

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/item', {
        item: itemText,
      });
      setListItems((prevItem) => [...prevItem, res.data]);
      setItemText('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/items');
        setListItems(res.data);
        console.log('increasing');
      } catch (error) {
        console.log(error);
      }
    };
    getItemsList();
  }, []);

  // delete item
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/item/${id}`);
      const restItems = listItems.filter((item) => item._id !== id);
      setListItems(restItems);
    } catch (error) {
      console.log(error);
    }
  };

  // update item
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/item/${isUpdating}`, {
        item: updateItemText
      });
      const updatedItem = listItems.findIndex(item=>item._id===isUpdating)
      listItems[updatedItem].item = updateItemText
      setUpdateItemText('');
      setIsUpdating('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-1/2 mx-auto mt-4 pb-1">
      <div className="card bg-neutral text-neutral-content pb-3 z-50">
        <div className="card-body">
          <form onSubmit={(e) => addItem(e)}>
            <h2 className="text-4xl text-center font-bold text-success mb-3 underline">
              Add Event
            </h2>
            <div className="flex justify-start gap-3">
              <div className="w-full">
                <input
                  value={itemText}
                  onChange={(e) => {
                    setItemText(e.target.value);
                  }}
                  type="text"
                  placeholder="Type your event here"
                  className="input input-bordered w-full text-black font-bold"
                />
              </div>
              <div className="flex justify-end gap-1">
                <button type="submit" className="btn btn-success font-bold">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
        {listItems.map((item, index) => (
          <div
            className="flex gap-2 space-y-2 items-center mx-8 justify-between"
            key={index}
          >
            {isUpdating === item._id ? (
              <>
                <form
                  onSubmit={(e) => {
                    updateItem(e);
                  }}
                  className="flex justify-between rounded-md w-full gap-3"
                >
                  <input
                    type="text"
                    placeholder={item.item}
                    className="text-black font-bold p-2 rounded-md w-full"
                    value={updateItemText}
                    onChange={(e) => {
                      setUpdateItemText(e.target.value);
                    }}
                  />
                  <button type='submit' className="flex justify-end btn btn-warning font-bold">
                    Update
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="flex justify-start bg-gray-500 text-xl w-full rounded-md">
                  <p className="text-white text-justify font-bold p-2">{item.item}</p>
                </div>
                <div className="flex justify-end gap-2 pb-2">
                  <button
                    className="btn btn-warning font-bold"
                    onClick={() => {
                      setIsUpdating(item._id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-error font-bold"
                    onClick={() => {
                      deleteItem(item._id);
                    }}
                  >
                    Delete
                  </button>
                  <button className="btn btn-primary">Date</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
// I have to go more 
export default Todo;
