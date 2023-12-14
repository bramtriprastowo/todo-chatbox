import UserIcons from '../../../atoms/userIcons/UserIcons'

type Chat = {
    id: number,
    title: string,
    body: string,
}

type Props = {
    chat: Chat,
    onClick: () => void
}

const InboxList = (props: Props) => {
  return (
    <li className='flex border-solid border-b-2 mb-2 pb-2' >
        <UserIcons />
        <div className='w-full cursor-pointer' onClick={props.onClick}>
            <div className='flex w-full'>
                <span className='text-[#2f80ed] font-bold w-[350px]'>{props.chat.title}</span>
                <span className='ms-8'>
                    <span className='mr-2'>14/12/2023</span> 09:45
                </span>
            </div>
            <p>Cameron Phillips :</p>
            <p className='whitespace-nowrap overflow-hidden text-ellipsis w-[300px]'>{props.chat.body}</p>
        </div>
    </li>
  )
}

export default InboxList