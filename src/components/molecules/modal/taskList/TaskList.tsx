import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faClock, faEllipsis, faPencil } from '@fortawesome/free-solid-svg-icons'
import EditableSpan from '../../../atoms/editableSpan/EditableSpan'

type Task = {
    id: number,
    title: string,
    date: string,
    desc: string,
    completed: boolean
}
type Props = {
    task: Task
}

const TaskList = (props: Props) => {
    const [task, setTask] = useState<Task>(props.task)
    const [isShowing, setIsShowing] = useState(true);

    const toggleCheck = () => {
        setTask({
            ...task,
            completed: !task.completed
        })
    }
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setTask({
            ...task,
            [name]: value
        })
    }
    const toggleIsShowing = () => {
        setIsShowing(!isShowing)
    }

    console.log(task.date);
    return (
        <li className='border-solid border-b-2 mr-3 mb-2 pb-2'>
            <div className='flex'>
                <span>
                    <input type="checkbox" name="completed" checked={task.completed} onChange={toggleCheck}/>
                    {/* <label htmlFor="title" className={task.completed ? 'line-through' : ''}>
                        {props.task.title}
                    </label> */}
                    <EditableSpan type='text' name='title' value={task.title} onChange={handleChange} placeholder='No Title' className={(task.completed ? 'line-through': '') + ''}/>
                </span>
                <span className='text-[#EB5757]'>2 Days Left</span>
                <span>{task.date}</span>
                <button onClick={toggleIsShowing}>
                    {isShowing ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
                <span>
                    <FontAwesomeIcon icon={faEllipsis} />
                </span>
            </div>
            <div className={(isShowing ? '' : 'hidden')}>
                <div className='flex'>
                    <FontAwesomeIcon icon={faClock} className={task.date ? 'text-[#2f80ed]' : ''} />
                    <EditableSpan type='date' name='date' value={task.date} onChange={handleChange} placeholder='Set Date' />
                </div>
                <div className='flex'>
                    <FontAwesomeIcon icon={faPencil} className={task.desc ? 'text-[#2f80ed]' : ''} />
                    <EditableSpan type='text' name='desc' value={task.desc} onChange={handleChange} placeholder='No Description' />
                </div>
            </div>
        </li>
    )
}

export default TaskList