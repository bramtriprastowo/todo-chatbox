import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction } from 'react'
import ChatBox from '../chatBox/ChatBox'

type Props = {
  idActiveInbox: number,
  setIdActiveInbox: Dispatch<SetStateAction<number>>
  hidePopup: () => void
}

const DetailInbox = (props: Props) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex border-solid border-b-2 px-4 items-center pb-2'>
        <FontAwesomeIcon icon={faArrowLeft} className='text-base cursor-pointer' onClick={() => props.setIdActiveInbox(0)}/>
        <div className='w-full pl-5'>
          <p className='text-[#2f80ed] font-bold'>Detail Inbox</p>
          <p>3 Participants</p>
        </div>
        <FontAwesomeIcon icon={faXmark} className='text-base cursor-pointer' onClick={props.hidePopup} />
      </div>
      <div className='h-full px-4 my-2'>
        <ChatBox />
      </div>
      <div className='flex px-4'>
        <input className='w-full py-2 px-3 rounded border-solid border-2' placeholder='Type a new message'/>
        <button className='bg-[#2f80ed] text-white ml-2 py-2 px-5 rounded'>Send</button>
      </div>
    </div>
  )
}

export default DetailInbox