function Content(props) {
    return(
        <section id={props.id}>
            <div className='flex justify-between mr-[4rem]'>
                <h2 className="text-[#26c17e] text-xl font-bold mb-[4rem]">{props.title}</h2>
                <div >
                    {props.content}
                </div>
            </div>
            
            {props.children}
        </section>
    )
}

export default Content;