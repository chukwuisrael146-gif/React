
export default function Entry() {
    return (
        <article className="journal-entry flex m-[30px] ml-[50px] ">
            <div className="w-[150px] h-[250px] overflow-hidden rounded-[5px] shrink-0 ">
                <img src="/src/images/100462016.jpeg" className="w-[100%] h-[100%] object-cover " alt="Mount fuji" />
            </div>
            <div className="ml-[20px] ">
                <div className="flex ">
                    <img className="w-[px] mr-[4px] " src="/src/images/marker.png" alt="map marker icon" />
                    <span className="pl-[2px] pr-[10px] ">Japan</span>
                    <a href="https://www.google.com/maps/about/behind-the-scenes/streetview/treks/mount-fuji/" className="underline ">View on google maps</a>
                </div>
                <h2 className="font-[700] text-[40px] m-[16px] ml-[0] ">Mount Fuji</h2>
                <p className="font-[700] mb-[15px] ">12 Jan 2021 - 24 Jan 2021</p>
                <p className="max-w-[500px] ">Mount fuji is the tallest mountain in Japan, standing at 3,766 meters (12,380 feet).
                    Mount fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourist</p>
            </div>
        </article>
    )

}