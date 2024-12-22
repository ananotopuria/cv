import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { fetchSkills, toggleForm, postSkills } from "../features/skillSlice";
import Content from "./SkillsContent";
import Buttons from "./Buttons";
import { validate } from '../utilities/validate'


function Skills() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSkills());
    }, [dispatch]);

    const handleOpenEditClick = () => {
        dispatch(toggleForm());
    }

    const localData = JSON.parse(localStorage.getItem('skills'));
    // const data = useSelector((state) => state.skills.data);
    // const status = useSelector((state) => state.skills.status);
    const isOpen = useSelector((state) => state.skills.skillsIsOpen);

    let content;

    if (localData) {
        content = 
            localData.map((elem) => (
                <div className="bg-[#26c17e] mt-5 text-white text-16 py-1 " key={elem.skills.id} style={ {width: `${elem.skills.range}%`} }>
                    <span className="ml-5">
                        {elem.skills.name}
                    </span>
                </div>
            ));
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            range: '',
        },
        validate,
        onSubmit: values => {
            dispatch(postSkills(values));
            formik.resetForm();
        },
    });

    return(
        <Content 
            title="Skills" 
            content={
                <Buttons
                    icon={<FontAwesomeIcon icon={faPen} />} 
                    text="Open edit"
                    onClick={handleOpenEditClick}
                />} 
            id="skills"
        >
            <form
                onSubmit={formik.handleSubmit}
                className="border rounded-lg border-[#26c17e] mr-[4rem]"
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                <div className="p-6 mt-4">
                <label htmlFor="name" className="mr-[2rem]">Skill Name:</label>
                <input
                    className={`${
                        formik.touched.name && formik.errors.name ? 'border border-1 border-red-500' : 'border'
                    } w-1/4 p-2 rounded-md`}
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Enter skill name"
                />
                {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
                <br />

                </div>
                <div className="p-6">

                <label htmlFor="range" className="mr-[2rem]">Skill Range:</label>
                <input 
                    // className={formik.touched.range && formik.errors.range? 'border border-1 border-red-500' : ''}
                    className={`${
                        formik.touched.range && formik.errors.range ? 'border border-1 border-red-500' : 'border'
                    } w-1/4 p-2 rounded-md`}
                    id="range"
                    name="range"


                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.range}
                    placeholder="Enter skill range"
                />
                {formik.touched.range && formik.errors.range ? <div>{formik.errors.range}</div> : null}
                <br />

                </div>
                <div className="ml-4">

                <Buttons 
                   
                    type="submit"
                    text="Add skill"
                    disabled={
                        (!formik.touched.name && !formik.touched.range) || (formik.errors.name || formik.errors.range) ? 'disabled' : false
                    }
                />
                </div>
            </form>
            <div className="mr-16">
                {content}
                <div className="w-full mb-5 mr-[5rem]">
                    <table className="w-full table-auto border-collapse mt-[1rem] ">
                        <tbody>
                            <tr className="py-4">
                                <td className="py-4 mt-[10px] border border-solid border-gray-500 border-t-0 border-collapse"></td>
                                <td className="py-4 mt-[10px] border border-solid border-gray-500 border-t-0 border-collapse"></td>
                                <td className="py-4 mt-[10px] border border-solid border-gray-500 border-t-0 border-collapse"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr className='border-0 text-[12px] text-[#667081] '>
                                <td className="w-1/3">Beginner</td>
                                <td className="w-1/3">Proficient</td>
                                <td className="w-1/3">Expert</td>
                                <td className="w-1/3">Master</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Content>
    )
}

export default Skills;