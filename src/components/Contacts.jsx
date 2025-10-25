export default function Contact() {
    return (
        <article className="flex flex-col bg-white m-[50px] mr-[1300px] p-[20px] pb-[40px] justify-center items-center rounded-[30px] ">
            <div>
                <img src="src\images\mr-whiskerson.png" className="w-[300px] " alt="mr-whiskerson" />
                <h3 className="text-[20px] font-[500] ml-[10px] mt-[10px] ">Mr.Whiskerson</h3>
            </div>
            <div className="flex mr-[130px] mt-[10px] mb-[10px] ">
                <img src="src\images\phone-icon.png" className="mr-[10px] " alt="phone icon" />
                <p className="">(212) 555-1234 </p>
            </div>
            <div className="flex mt-[10px] " >
                <img src="src\images\mail-icon.png" className="mr-[10px] " alt="mail-icon" />
                <p>mr.whiskaz@catnap.com.meow</p>
            </div>
        </article>
    )
}