function Menu(props){
    return <div className="flex mt-5">
        <img className="w-[200px] h-[150px]  rounded-[8px]" src={props.src} alt="" />
        <div className=" ml-[10px]">
        <p className="font-bold">{props.country} </p>
        <p>{props.subtitle} </p>
        <p className="font-bold">{props.price} </p>
        <button className="w-[100px] h-[30px] font-semibold rounded-[8px] mt-[40px] bg-yellow-500 "> Buy Now </button>
        </div>
    </div>
}
export default Menu