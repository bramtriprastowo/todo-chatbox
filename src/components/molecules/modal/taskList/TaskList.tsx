import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faClock, faEllipsis, faPencil } from '@fortawesome/free-solid-svg-icons'
import EditableSpan from '../../../atoms/editableSpan/EditableSpan'

type Task = {
    id: number
    title: string
    completed: boolean
}
type Props = {
    task: Task
}

const TaskList = (props: Props) => {
    const [task, setTask] = useState<Task>(props.task)
    const [date, setDate] = useState('')
    const [desc, setDesc] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel varius sem. Vivamus dapibus vitae nisl id consequat. Morbi id leo ut nisl rhoncus viverra in vitae turpis. Nam vestibulum libero nec laoreet placerat. Nulla sit amet dui viverra, venenatis tellus ac, aliquam nisi. Curabitur tincidunt libero eget finibus lobortis. Etiam pretium, velit ut viverra imperdiet, neque dui bibendum ligula, a iaculis tellus nisi vel velit. Etiam mattis eros ut turpis lacinia aliquam non vitae dui. Pellentesque accumsan lectus lacus, eu ultrices dolor auctor id. Maecenas sodales, ligula quis vulputate imperdiet, nisl sem commodo urna, ac dictum sem sapien id augue.')
    const [isShowing, setIsShowing] = useState(true);
    const [daysLeft, setDaysLeft] = useState(0);
    const [isDeleteActive, setIsDeleteActive] = useState(false);

    const toggleCheck = () => {
        setTask({
            ...task,
            completed: !task.completed
        })
    }
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setTask({
            ...task,
            [name]: value
        })
    }
    const handleChangeDesc = (e: any) => {
        const { value } = e.target;
        setDesc(value)
    }
    const handleChangeDate = (e: any) => {
        const { value } = e.target;
        setDate(value)
    }
    const toggleIsShowing = () => {
        setIsShowing(!isShowing)
    }

    const daysLeftFunc = () => {
        if (!date) {
            return null
        }
        const dateNow = new Date();
        const dateDue = new Date(date);
        const oneDay = 84000 * 1000; //on ms

        const diffDays = Math.floor((+dateDue - +dateNow) / oneDay);
        if (diffDays < 0) {
            return null
        }
        setDaysLeft(diffDays);
    }

    const formatDate = (date: string) => {
        const arr = date.split("-");
        let formattedDate = `${arr[2]}/${arr[1]}/${arr[0]}`;
        return formattedDate;
    }

    const handleDelete = () => {
        setIsDeleteActive(false);
    }

    useEffect(() => {
        daysLeftFunc();
    }, [date])

    return (
        <li className='border-solid border-b-2 mr-3 mb-3 pb-3'>
            <div className='flex justify-between'>
                <span className='flex '>
                    <input type="checkbox" name="completed" checked={task.completed} onChange={toggleCheck} className='mt-1 mb-auto mr-4' />
                    <EditableSpan type='text' name='title' value={task.title} onChange={handleChange} placeholder='Type Task Title' className={(task.completed ? 'line-through text-[#828282] ' : '') + 'font-bold break-words'} />
                </span>
                <div className='flex justify-end w-[260px]'>
                    <span className={((!date || task.completed) ? 'hidden ' : '') + 'text-[#EB5757]'}>
                        {(daysLeft > 0) ? `${daysLeft} Days Left` : 'Expired'}
                    </span>
                    <span className='ml-4'>{date ? formatDate(date) : ''}</span>
                    <button onClick={toggleIsShowing} className='h-fit ml-4'>
                        {isShowing ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </button>
                    <div className='relative ml-4 h-fit'>
                        <button onClick={() => setIsDeleteActive(!isDeleteActive)}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                        <button className={(isDeleteActive ? 'absolute ' : 'hidden ') + 'top-5 right-0 z-10 text-[#EB5757] bg-white border-solid border-2 border-[#4f4f4f] pl-2 pr-16 py-1 rounded text-left hover:bg-[#efefef]'} onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div className={(isShowing ? '' : 'hidden')}>
                <div className='flex items-center ml-7 mt-3'>
                    <FontAwesomeIcon icon={faClock} className={(date ? 'text-[#2f80ed] ' : '') + 'mr-4'} />
                    <EditableSpan type='date' name='date' value={date} onChange={handleChangeDate} placeholder='Set Date' />
                </div>
                <div className='flex ml-7 mt-3'>
                    <FontAwesomeIcon icon={faPencil} className={(desc ? 'text-[#2f80ed] ' : '') + 'mt-1 mr-4'} />
                    <EditableSpan type='text' name='desc' value={desc} onChange={handleChangeDesc} placeholder='No Description' />
                </div>
            </div>
        </li>
    )
}

export default TaskList