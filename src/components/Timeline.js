import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import Info from "./Info";
import { useEffect } from "react";
import { fetchEducation } from "../features/educationSlice";

function TimeLine() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEducation());
    }, [dispatch]);

    const data = useSelector((state) => state.education.data)
    const status = useSelector((state) => state.education.status);

    if (status === 'loading') {
        return(
            <div className="py-[7rem]">
                <FontAwesomeIcon className="text-[#26c17e] py-75 w-full animate-spin" icon={faRotate} size="xl" />
            </div>
        )
    } else if (status === 'success') {
        return(
            <div className="h-[30vh] max-h-[80vh] overflow-y-auto pr-15">
                <ul>
                    {data.educations.map((edu, index) => (
                        <li key={index} className="flex flex-">
                            <div className="font-semibold mr-35 bg-white relative h-25 ">
                                {edu["date"]}
                                <div className=" w-1 bg-[#26c17e] my-4 mx-4 h-16" />
                            </div>
                            <div>
                                <Info text={edu["description"]}>
                                    <h3 className="bg-[#EEE] ml-[1rem] mr-[2rem]">{edu["title"]}</h3>
                                </Info>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return(
            <div className="text-red-500 py-75 w-full text-center">
                Something went wrong, please review your server connection!
            </div>
        )
    }


}

export default TimeLine;