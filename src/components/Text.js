
export function Text(props){
    return (
        <div className='bg-[#ffffffea] rounded-md p-2 relative hover:-translate-y-2 transition box'>
            <h1 className="text-xl font-bold underline m-1 text-rose-700">{props.title}</h1>
            <p>{props.content}</p>
            {
                props.icons &&
                    props.icons.map((e)=> <a href={e.url}><i className={"text-4xl m-3 cursor-pointer fa-brands fa-"+e.title}></i></a> )

            }
            
        </div>
    )
}