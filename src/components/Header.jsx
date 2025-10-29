import chefClaudeicon from '/src/images/chef-claude-icon.png';


export default function Header() {
    return (
        <header 
        className="flex 
        justify-center 
        items-center 
        bg-white
        gap-7
        p-[20px]
        shadow-xl/20
        shadow-black ">
            <img src={chefClaudeicon} className=" w-[70px] " />
            <h1 className="text-[50px] font-[400] ">Chef Claude</h1>
        </header>
    )
}