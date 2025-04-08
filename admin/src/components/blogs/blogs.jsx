import { useEffect, useState } from "react";
import { myaxios } from '../../apiCall/index';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader, hideLoader } from '../../reducers/loader';
import Blog from "./blog";
import Makon from "./makon";

const Blogs = () => {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("blog");
  const { link } = useSelector(state => state.loader);
  const dispatch = useDispatch();

  const getAll = async (selectedType) => {
    dispatch(showLoader());
    try {
      const response = await myaxios.get(`/api/${selectedType}/get-all`);
      if (response.data.ok) {
        setItems(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Ma'lumotlarni yuklashda xatolik yuz berdi");
    }
    dispatch(hideLoader());
  };

  const deleteHandler = async (id) => {
    dispatch(showLoader());
    try {
      const response = await myaxios.delete(`/api/${type}/delete/${id}`);
      getAll(type);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "O'chirishda xatolik");
    }
    dispatch(hideLoader());
  };

  useEffect(() => {
    getAll(type);
  }, [type]);

  console.log(type, items);
  return (
    <div className="md:w-2/3 max-md:px-2">
      <h2 className="text-center md:text-5xl text-2xl font-bold my-12">Barcha {type}lar</h2>
      <div className="w-full">
        <select value={type} onChange={e => setType(e.target.value)} className="w-full p-2 border border-blue-400 outline-none cursor-pointer">
          <option value="blog">Bloglar</option>
          <option value="makon">Sayohatlar</option>
        </select>
      </div>

      {type === "blog" ? (
        <Blog items={items} deleteHandler={deleteHandler} link={link} />
      ) : (
        <Makon items={items} deleteHandler={deleteHandler} link={link} />
      )}
    </div>
  );
};

export default Blogs;
