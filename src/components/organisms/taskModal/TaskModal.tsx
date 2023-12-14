import { useEffect, useState } from 'react';
import TaskList from '../../molecules/modal/taskList/TaskList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// type Props = {}
const tasksFilterOptions = [
    {id: 1, value: 'Personal Errands', label: 'Personal Errands'}, 
    {id: 2, value: 'Urgent To Do', label: 'Urgent To Do'}];

const TaskModal = () => {
    const [tasks, setTasks] = useState([])
    const [fakeTasks, setFakeTasks] = useState<any>([])
    const [tasksFilter, setTasksFilter] = useState('');
    const [isOptionActive, setIsOptionActive] = useState(false);

    const handleTaskOption = (e: any) => {
        setTasksFilter(e.target.value);
        setIsOptionActive(false);
    }

    const addFakeTask = () => {
        setFakeTasks([...fakeTasks, {
            id: fakeTasks.length + 1,
            title: '',
            completed: false,
        }])
    }

    useEffect(() => {
        fetch(import.meta.env.VITE_BASE_URL_1 + '/todos')
            .then(response => response.json())
            .then(json => setTasks(json))
    }, [])

    return (
        <div className='bg-white w-[650px] px-4 py-3 rounded text-sm'>
            <div className='flex justify-between mb-3'>
                <div className='flex justify-center relative w-[300px]'>
                    <button className='border-solid border-2 border-[#4f4f4f] rounded px-3 py-1' onClick={() => setIsOptionActive(!isOptionActive)}>
                        {tasksFilter ? tasksFilter : 'My Tasks'}
                        <FontAwesomeIcon icon={faChevronDown} className='ml-3'/>
                    </button>
                    <ul className={(isOptionActive ? '' : 'hidden ') + 'absolute top-8 left-0 w-[300px] text-center bg-white border-solid border-2 border-[#4f4f4f] rounded z-10'}>
                        {tasksFilterOptions.map((option, index) => {
                            return (
                            <li key={index} className={(index === 0 ? 'border-solid border-b-2 border-[#4f4f4f] ' : '') + 'py-2 px-3 hover:bg-[#efefef]'}>
                                <button className='w-full text-left' onClick={handleTaskOption} value={option.value}>
                                    {option.label}
                                </button>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <button className='bg-[#2f80ed] rounded text-white px-5 py-1' onClick={addFakeTask}>New Task</button>
            </div>
            <ul className='overflow-y-auto h-[400px]'>
                {tasks.length > 0 ? tasks.slice(0, 3).map((task, index) => {
                    return (
                        <TaskList task={task} key={index} />
                    )
                }) : ''}
                {/* Fake Create Task*/}
                {fakeTasks.length > 0 ? fakeTasks.map((task: any, index: number) => {
                    return (
                        <TaskList task={task} key={index} />
                    )
                }) : ''}
            </ul>
        </div>
    )
}

export default TaskModal