import { useState } from 'react';
import InboxList from '../inboxList/InboxList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DetailInbox from '../detailInbox/DetailInbox';

type Props = {
    hidePopup: () => void
}
const inbox = [
    {
        id: 1,
        groupName: 'Close off Case #0129230 - RODRIGUES, Amiguel',
        date: '',
        lastSender: 'Cameron Phillips',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos magni nihil doloribus, laudantium est accusamus! Porro optio voluptatibus libero minima odio adipisci ratione maxime impedit explicabo accusantium. Autem quibusdam, repudiandae adipisci aliquam corporis explicabo ratione molestias cum nobis assumenda.',
    },
    {
        id: 2,
        groupName: 'Close off Case #0129230 - RODRIGUES, Amiguel',
        date: '2023-11-22',
        lastSender: 'Ellen',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos magni nihil doloribus, laudantium est accusamus! Porro optio voluptatibus libero minima odio adipisci ratione maxime impedit explicabo accusantium. Autem quibusdam, repudiandae adipisci aliquam corporis explicabo ratione molestias cum nobis assumenda.',
    },
    {
        id: 3,
        groupName: 'Close off Case #0129230 - RODRIGUES, Amiguel Close off Case #0129230 - RODRIGUES, AmiguelClose off Case #0129230 - RODRIGUES, Amiguel',
        date: '2023-11-26',
        lastSender: 'Cameron',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos magni nihil doloribus, laudantium est accusamus! Porro optio voluptatibus libero minima odio adipisci ratione maxime impedit explicabo accusantium. Autem quibusdam, repudiandae adipisci aliquam corporis explicabo ratione molestias cum nobis assumenda.',
    }
];

const InboxModal = (props: Props) => {
    const [search, setSearch] = useState('');
    const [idActiveInbox, setIdActiveInbox] = useState(0);
    const handleChange = (e: any) => {
        setSearch(e.target.value);
    }
    const handleClick = (id: number) => {
        setIdActiveInbox(id)
    }

    return (
        <div className={(idActiveInbox ? '' : 'px-4 ') + 'bg-white w-[650px] py-3 rounded text-xs h-[460px]'}>
            {!idActiveInbox ? (
                <>
                    <div className='relative mb-3'>
                        <input
                            type='text'
                            name='search'
                            value={search}
                            onChange={handleChange}
                            placeholder='Search'
                            className='border-solid border-2 w-full px-16 py-1 rounded'
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass}
                            className='absolute top-0 bottom-0 my-auto right-14'
                        />
                    </div>
                    <ul className='overflow-y-auto h-[400px]'>
                        {inbox.map((chat, index) => {
                            return (
                                <InboxList chat={chat} key={index} onClick={() => handleClick(index + 1)} />
                            )
                        })}
                    </ul>
                </>
            ) : (
                <DetailInbox idActiveInbox={idActiveInbox} setIdActiveInbox={setIdActiveInbox} hidePopup={props.hidePopup} />
            )
            }
        </div>
    )
}

export default InboxModal