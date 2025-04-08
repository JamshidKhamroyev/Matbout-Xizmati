const Makon = ({items, deleteHandler, link}) => {
  return (
    <div className="w-full p-3 flex flex-col gap-5">
        {items.map(item => (
            <div className="w-full p-2 border border-gray-400" key={item._id}>
                <div>
                    <img src={`${link}/api/makon-images/${item.image}`} className="h-[400px] w-full" alt={item.text} />
                </div>
                <p className="text-justify opacity-90">{item?.text}</p>
                <button onClick={() => deleteHandler(item._id)} className="px-4 py-2 rounded-sm border my-2 border-red-700 text-red-700 hover:text-white hover:bg-red-700 cursor-pointer duration-300 active:opacity-80">O'chirish</button>
            </div>
        ))}
    </div>
  )
}

export default Makon