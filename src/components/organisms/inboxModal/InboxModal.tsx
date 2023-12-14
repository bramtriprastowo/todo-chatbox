import { useEffect, useState } from 'react';
import InboxList from '../../molecules/modal/inboxList/InboxList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DetailInbox from '../../molecules/modal/detailInbox/DetailInbox';

type Props = {
    hidePopup: () => void
}

const InboxModal = (props: Props) => {
    const [search, setSearch] = useState('');
    const [inbox, setInbox] = useState([])
    const [idActiveInbox, setIdActiveInbox] = useState(0);
    const handleChange = (e: any) => {
        setSearch(e.target.value);
    }
    const handleClick = (id: number) => {
        setIdActiveInbox(id)
    }

    useEffect(() => {
        fetch(import.meta.env.VITE_BASE_URL_1 + '/posts')
        .then(response => response.json())
        .then(json => setInbox(json))
    }, [])
    

    return (
        <div className={(idActiveInbox ? '' : 'px-4 ') + 'bg-white w-[650px] py-3 rounded text-sm h-[460px]'}>
            {!idActiveInbox ? (
                <>
                    <div className='relative mb-5'>
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
                    <ul className='overflow-y-auto h-[370px]'>
                        {inbox.slice(0, 7).map((chat, index) => {
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