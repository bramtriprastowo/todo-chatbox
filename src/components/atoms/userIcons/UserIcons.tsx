import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// type Props = {}

const UserIcons = () => {
    return (
        <div className='relative pr-10'>
            <span
                className={'flex w-12 h-12 justify-center items-center rounded-full bg-[#e0e0e0] '}
            >
                <FontAwesomeIcon icon={faUser} className='text-xl text-[#4f4f4f]'/>
            </span>
            <span
                className={'absolute top-0 left-7 flex w-12 h-12 justify-center items-center rounded-full bg-[#2f80ed] whitespace-nowrap'}
            >
                <FontAwesomeIcon icon={faUser} className='text-xl text-white'/>
            </span>
        </div>
    )
}

export default UserIcons