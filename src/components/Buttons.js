import { useNavigate } from "react-router-dom";

function Button(props) {
    let navigate = useNavigate();
    function handleClick() {
        if (props.to) navigate(props.to);
        if (props.onClick) {
            const clickFunc = props.onClick;
            clickFunc();
        }
    }

    return (
        <button className="cursor-pointer my-[2rem] w-[130px] h-[40px] bg-[#222935] rounded-lg text-white" id={props.id} type={props.type ? `${props.type}` : 'button'} onClick={handleClick} disabled={props.disabled}>
            <span>
                {props.icon}
            </span>
            {props.text}
        </button>
    )
}

export default Button;