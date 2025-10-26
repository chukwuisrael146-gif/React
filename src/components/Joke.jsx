export default function Joke(props) {
    return(
        <>
            {props.setup && <p className=" font-[500]  text-[30px] m-[10px] ml-[20px] ">
             Setup : {props.setup}
            </p>}
            <p className=" text-[20px] m-[10px ml-[20px] ">
            Punchline :{props.punchline}
            </p>
            <hr />
        </>
    )
}