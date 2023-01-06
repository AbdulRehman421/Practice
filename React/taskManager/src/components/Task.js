import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { BiSun } from 'react-icons/bi';
import { BsFillMoonStarsFill } from 'react-icons/bs';
const Task = () => {
    const [allTasks, setAllTasks] = useState([])
    const [dark, setDark] = useState(false);

    const formik = useFormik({
        initialValues: {
            title: '',
            desc: '',
            due: '',
            tags: '',
            status: 'Open',
        },

        // Validation Form
        validationSchema: Yup.object({
            title: Yup.string().max(20, 'Name must be less than 20 characters')
                .required('Title is required'),
            desc: Yup.string().max(20, 'Desc must be less than 20 characters')
                .required('Description is required'),

        }),

        // on submit
        onSubmit: (values) => {
            setAllTasks((prev) => [...prev, values])
        }

    })
    const handleDelete = (id) => {

        const remainingTasks = allTasks.filter((task, i) => i !== id);

        setAllTasks(remainingTasks);


    }
    return (
        <div className={`min-h-screen ${dark ? 'dark:bg-black' : ''}`}>
            <div>
                <nav className={`flex justify-between p-5 ${dark ? "dark:bg-black " : ""}`}>
                    <h1 className={`text-2xl ${dark && 'dark:text-white'}`}>
                        Task Manager
                    </h1>
                    <span
                        className={`cursor-pointer text-xl ${dark && 'dark:text-white'}`}
                        onClick={() => setDark(prev => !prev)}>
                        {
                            dark ? <BsFillMoonStarsFill /> : <BiSun />
                        }
                    </span>
                </nav>
            </div>
            <div className={`${dark ? "dark:bg-black dark:text-white" : ""}`}>

                <form
                    onSubmit={formik.handleSubmit}
                    className=' flex justify-evenly pb-5'>
                    <div className=''>
                        <label htmlFor="title" className={`block pb-2${formik.touched.title && formik.errors.title ? ' text-red-500' : ''}`}>
                            {formik.touched.title && formik.errors.title ? formik.errors.title : 'Title'}
                        </label>
                        <input
                            type="text"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="title"
                            placeholder='Enter title'
                            className={`border-2 px-2 border-black rounded-md ${dark && 'bg-black border-white'}`} />
                    </div>
                    <div className=''>
                        <label htmlFor="desc" className={`block pb-2 ${formik.touched.desc && formik.errors.desc ? ' text-red-500' : ''}`}>
                            {formik.touched.desc && formik.errors.desc ? formik.errors.desc : 'Description'}
                        </label>
                        <input
                            type="text"
                            value={formik.values.desc}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="desc"
                            placeholder='Enter description'
                            className={`border-2 px-2 border-black rounded-md ${dark && 'bg-black border-white'}`} />
                    </div>
                    <div className=''>
                        <label htmlFor="due" className='block pb-2'>Due</label>
                        <input
                            type="date"
                            value={formik.values.due}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="due"

                            className={`border-2 px-2 border-black rounded-md ${dark && 'bg-black border-white text-white'}`} />
                    </div>
                    <div className=''>
                        <label htmlFor="tags" className='block pb-2'>Tags</label>
                        <input
                            type="text"
                            value={formik.values.tags}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="tags"
                            placeholder='Enter Tags'
                            className={`border-2 px-2 border-black rounded-md ${dark && 'bg-black border-white'}`} />
                    </div>
                    <div>
                        <label htmlFor="status" className='block pb-2'> Status</label>
                        <select
                            onChange={formik.handleChange}
                            name="status"
                            value={formik.values.status}
                            className={`border-2 px-2 border-black rounded-md ${dark && 'bg-black border-white text-white'}`} >
                            <option value="Open">Open</option>
                            <option value="Working">Working</option>
                            <option value="Done">Done</option>
                            <option value="OverDue">OverDue</option>

                        </select>
                    </div>
                    <div className=' flex items-end'>
                        <button type='submit' className={`bg-black text-white p-2 rounded-lg ${dark && ' bg-white text-black'}`}>Add Task</button>
                    </div>

                </form>

                <div className=' flex flex-wrap justify-around'>
                    {
                        allTasks.map((task, id) => (
                            <div
                                key={id}
                                className={`bg-white flex flex-col justify-around  drop-shadow-2xl rounded-2xl w-1/4 m-5 p-10 ${dark && 'text-black'}`}
                            >
                                <div className='mb-3 '> <span className=' font-bold text-slate-900'>Name : </span>{task.title}</div>
                                <div className='mb-3 '><span className=' font-bold text-slate-900'>Desc : </span> {task.desc}</div>
                                <div className='mb-3'><span className=' font-bold text-slate-900'>Due :  </span>{task.due}</div>
                                <div className='mb-3 '><span className=' font-bold text-slate-900'>Tags :  </span>{task.tags}</div>
                                <div className=' mb-3'><span className=' font-bold text-slate-900'>Status :  </span>{task.status}</div>
                                <div className=' text-center rounded py-1 my-3 bg-black text-white cursor-pointer' onClick={() => handleDelete(id)}>Delete</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Task