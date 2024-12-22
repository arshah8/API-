export default async function Home (props : any)
{
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
    const response = await url.json()
   
    return(
        <div className="h-screen w-full flex justify-center items-center bg-gray-50">
       <div className="relative flex h-[300px] w-[300px] mx-11 mt-30 bg-green-200 rounded-xl shadow-2xl justfiy-center itmes-center">
     
       <div className="absolute top-[-20px] right-[-20px]">
                    <span className="text-4xl">🌟</span>
        </div>

         <div className="flex flex-col text-black h-full w-full justify-center items-center" >
           <h1 className=" text-center font-bold text-xl lg:text-2xl">
            Todays Todo  : <br></br>
            </h1>
            <h2 className="text-red-400 font-mono lg:text-lg text-center">
            {response.id} {response.title}
            </h2>
         </div>

        </div>
        </div>
            
     )
        
    
}