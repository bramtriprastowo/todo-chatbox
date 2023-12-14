import thunderIcon from '../../../assets/thunder.png'
import taskIcon from '../../../assets/task.png'
import taskWhiteIcon from '../../../assets/task-white.png'
import inboxIcon from '../../../assets/chat.png'
import inboxWhiteIcon from '../../../assets/chat-white.png'

type Props = {
    content?: string
    className?: string
    position: number
    menuActive: boolean
    menuHandleClick?: () => void
    activePosition: number
    shadowHandleClick?: () => void
}

const Icons = (props: Props) => {
    let rightPositionClass = 'right-0 ';
    let bgColor = 'fff ';

    if (props.position === 1) {
        bgColor = 'bg-[#fff] ';
        rightPositionClass = 'right-48 ';
    } else if (props.position === 2) {
        bgColor = 'bg-[#fff] ';
        rightPositionClass = 'right-24 ';
    } else if (props.position === 3) {
        bgColor = `bg-[#2F80ED] `;
        rightPositionClass = 'right-0 ';
    }

    return (
        <div
            className={'absolute text-center bottom-0 duration-500 ease-in-out ' +
                ((props.menuActive && props.activePosition === props.position) ? 'right-0 '
                    : (props.menuActive && props.activePosition && props.position !== 3) ? 'right-24 '
                    : (props.menuActive) ? rightPositionClass
                    : 'right-0 ') + 
                ((props.activePosition && props.position == 3) ? '-z-10 ' : '') +
                (props.className ? props.className : '')
            }
        //style={{ transitionProperty: 'right' }}
        >
            <span className={(props.menuActive && props.content && props.activePosition === 0) ? 'block' : 'hidden'}>{props.content}</span>
            <button
                className={'w-14 h-14 rounded-full absolute bottom-0 right-3 bg-[#4f4f4f] '
                    + (props.activePosition === props.position ? 'block' : 'hidden' )
                }
                onClick={props.shadowHandleClick}
            >
            </button>
            <button
                className={'relative flex w-14 h-14 justify-center items-center rounded-full '
                    + ( props.position === 1 && props.activePosition === 1 ? 'bg-[#f8b76b]'
                        : props.position === 2 && props.activePosition === 2 ? 'bg-[#8785ff]'
                        : bgColor)
                }
                onClick={props.menuHandleClick}
            >
                { props.position === 1 && props.activePosition === 1 ? (<img src={taskWhiteIcon} alt="Task White Icon" className='w-6' />) 
                : props.position === 1 ? (<img src={taskIcon} alt="Task Icon" className='w-6' />)
                : props.position === 2 && props.activePosition === 2 ? (<img src={inboxWhiteIcon} alt="Inbox White Icon" className='w-6' />)
                : props.position === 2 ? (<img src={inboxIcon} alt="Inbox Icon" className='w-6' />)
                : props.position === 3 ? (<img src={thunderIcon} alt="Quick Icon" className='w-6' />)
                : '' }
            </button>
        </div>
    )
}

export default Icons