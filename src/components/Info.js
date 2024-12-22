function Info(props) {
    return (
        <div>
            {props.children}
            <p className="bg-[#EEE] ml-[1rem] h-[4rem] mr-[2rem]">{props.text}</p>
        </div>
    )
}

export default Info;