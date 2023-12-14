import TaskList from '../taskList/TaskList';

type Props = {}
const tasks = [
    {
        id: 1,
        title: 'Close off Case #0129230 - RODRIGUES, Amiguel',
        date: '',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos magni nihil doloribus, laudantium est accusamus! Porro optio voluptatibus libero minima odio adipisci ratione maxime impedit explicabo accusantium. Autem quibusdam, repudiandae adipisci aliquam corporis explicabo ratione molestias cum nobis assumenda.',
        completed: true
    },
    {
        id: 2,
        title: 'Close off Case #0129230 - RODRIGUES, Amiguel',
        date: '2023-11-22',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos magni nihil doloribus, laudantium est accusamus! Porro optio voluptatibus libero minima odio adipisci ratione maxime impedit explicabo accusantium. Autem quibusdam, repudiandae adipisci aliquam corporis explicabo ratione molestias cum nobis assumenda.',
        completed: true
    },
    {
        id: 3,
        title: 'Close off Case #0129230 - RODRIGUES, Amiguel',
        date: '2023-11-26',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos magni nihil doloribus, laudantium est accusamus! Porro optio voluptatibus libero minima odio adipisci ratione maxime impedit explicabo accusantium. Autem quibusdam, repudiandae adipisci aliquam corporis explicabo ratione molestias cum nobis assumenda.',
        completed: true
    }
];

const TaskModal = (props: Props) => {
    return (
        <div className='bg-white w-[650px] px-4 py-3 rounded text-xs'>
            <div className='flex justify-between mb-3'>
                <div>
                    <span>Dropdown</span>
                </div>
                <button className='bg-[#2f80ed] rounded text-white px-2 py-1'>New Task</button>
            </div>
            <ul className='overflow-y-auto h-[400px]'>
                {tasks.map((task, index) => {
                    return (
                        <TaskList task={task} key={index}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskModal