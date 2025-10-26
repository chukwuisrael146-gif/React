
export default function Entry(props) {
    console.log(props)
    return (
        <article className="journal-entry flex m-[30px] justify-left items-center ml-[50px] ">
            <div className="w-[150px] h-[250px] overflow-hidden rounded-[5px] shrink-0 ">
                <img src={props.img.src} className="w-[100%] h-[100%] object-cover " alt={props.img.alt} />
            </div>
            <div className="ml-[20px] ">
                <div className="flex ">
                    <img className="w-[10px] mr-[4px] " src="/src/images/marker.png" alt="map marker icon" />
                    <span className="pl-[2px] pr-[10px] ">{props.country}</span>
                    <a href={props.maplink} className="underline ">View on google maps</a>
                </div>
                <h2 className="font-[700] text-[40px] m-[16px] ml-[0] "> {props.title} </h2>
                <p className="font-[700] mb-[15px] ">{props.dates}</p>
                <p className="max-w-[500px] ">{props.text}</p>
            </div>
        </article>
    )

}