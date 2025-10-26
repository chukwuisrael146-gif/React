export default function Contact({img, name, phone, email}) {
    return (
        <article className="flex flex-col bg-blue-700 m-[50px] mr-[1300px] p-[20px] pb-[40px] justify-center items-center rounded-[30px] text-white  ">
            <div>
                <img src={img} className="w-[300px] rounded-[20px] " alt="mr-whiskerson" />
                <h3 className="text-[25px] font-[700] ml-[10px] mt-[10px] ">{name}</h3>
            </div>
            <div className="flex mr-[130px] mt-[10px] mb-[10px] ">
                <img src="src\images\phone-icon.png" className="mr-[10px] " alt="phone icon" />
                <p className=""> {phone} </p>
            </div>
            <div className="flex " >
                <img src="src\images\mail-icon.png" className="mr-[10px] " alt="mail-icon" />
                <p> {email} </p>
            </div>
        </article>
    )
}