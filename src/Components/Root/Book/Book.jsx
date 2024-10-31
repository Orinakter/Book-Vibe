import { CiStar } from "react-icons/ci";
const Book = ({item}) => {
    return (
        <div className=" border-2 rounded-xl p-5 mx-auto">
           <img src={item.image} alt=""className="w-[325px] h-[230px]" />
           <div className="flex justify-between mt-3 ">
            <button className="btn text-green-600 rounded-xl">Young Adult</button>
            <button className="btn  text-green-600 rounded-xl">Identity</button>
           </div>
           <h2 className="text-2xl font-semibold mt-2">{item.bookName}</h2>
           <p className="mb-3 mt-3">By:{item.author}</p>
           <br></br>

           <hr></hr>

           <div className="flex justify-between mt-4">
            <p>{item.category}</p>
            <div className="flex gap-3 justify-center items-center">
                <p>{item.rating}</p>
                <p><CiStar /></p>
            </div>
           </div>

        </div>
    );
};

export default Book;