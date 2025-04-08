import moment from "moment";

const Blog = ({ items = [], deleteHandler, link }) => {
  return (
    <div>
      {items.length > 0 ? (
        items.map((item, i) => (
          <div key={item?._id || i} className="border p-2 w-full my-4 rounded-lg shadow-sm">
            <div className="w-full">
              {Array.isArray(item?.image) && item?.image?.length > 0 ? (
                <div
                  className={`w-full gap-2 ${
                    item.image.length === 1
                      ? "flex flex-col"
                      : item.image.length === 2
                      ? "grid grid-cols-1 md:grid-cols-2"
                      : item.image.length === 3
                      ? "grid grid-cols-1 md:grid-cols-3"
                      : "flex flex-col"
                  }`}
                >
                  {item?.image?.map((img, index) => {
                    const src = `${link}/api/blog-images/${img}`;
                    return (
                      <img
                        key={index}
                        src={src}
                        alt={`image-${index}`}
                        className="w-full h-auto max-h-[400px] object-fill rounded-md"
                        loading="lazy"
                      />
                    );
                  })}
                </div>
              ) : item?.video ? (
                <div className="w-full aspect-video my-2">
                  <iframe
                    className="w-full h-full rounded-md"
                    src={item?.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`video-${item?._id}`}
                  ></iframe>
                </div>
              ) : (
                <p>Rasm yoki video mavjud emas</p>
              )}
            </div>

            <div className="py-4">
              <h3 className="Itim md:text-4xl text-3xl mb-3 font-bold">{item?.title}</h3>
              <p className="text-gray-700">{item?.text}</p>
              <footer className="border-t w-full flex pt-4 opacity-80 md:text-[18px] justify-between items-center mt-4">
                <div className="text-sm text-gray-500">
                  {item?.createdAt
                    ? moment(item.createdAt).format("DD-MMMM, YYYY")
                    : "Sana yo'q"}
                </div>
                <button
                  onClick={() => deleteHandler(item._id)}
                  className="py-1 px-3 hover:bg-red-600 border border-red-600 text-red-600 hover:text-white transition-all rounded-md text-sm"
                >
                  O'chirish
                </button>
              </footer>
            </div>
          </div>
        ))
      ) : (
        <div className="text-2xl italic text-center mt-10">
          Hozirda bloglar yo'q
        </div>
      )}
    </div>
  );
};

export default Blog;
