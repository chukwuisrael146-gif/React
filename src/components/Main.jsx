export default function Main() {
    const ingredient = ["Tomato", "Cheese", "Bread"];

    const ingredientsListItems = ingredient.map(ingridient => (
        <li key={ingridient}>{ingridient}</li>
    ))

    function handleSubmit(e) {
        e.preventDefault(); // prevent page reload
        const formData = new FormData(e.target); // ✅ correct
        const newIngredient = formData.get('ingredient'); // example field name
        ingredient.push(newIngredient)
        console.log(ingredient);
    }


    return (
        <main onSubmit={handleSubmit} className="p-[40px] flex flex-col justify-center  ">
            <form className="flex justify-center items-center gap-4 mt-10 h-[38px] ">
                <input className="rounded-[6px] 
                border-[1px] 
                border-black-300 
                p-[10px] w-[300px]
                shadow-lg/10
                shadow-black
                grow
                min-w-[150px]
                 "
                    type="text"
                    placeholder="e.g tomato, cheese, bread"
                    aria-label="Add ingridient"
                    name="ingredient"
                />
                <button className="rounded-[20px] border-[1px] border-black-300 p-[10px] 
                w-[200px] bg-black text-white text-[0.875rem] cursor-pointer font-[500] ">
                    <span className="mr-[5px]">+</span>Add ingridient
                </button>
            </form>
            <ul className="items-start mt-10 space-y-2 text-[1.5rem] font-[500] list-disc ml-[50px] ">
                <li>
                    {ingredientsListItems}
                </li>
            </ul>
        </main>
    )
}