import { useState } from 'react';
import './App.css'
import Icons from './components/atoms/icons/Icons'
import TaskModal from './components/molecules/modal/taskModal/TaskModal';
import InboxModal from './components/molecules/modal/inboxModal/InboxModal';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  // const [popupActive, setPopupActive] = useState(false);
  const [activePosition, setActivePosition] = useState(0);

  const menuHandleClick = () => {
    setMenuActive(!menuActive);
  }
  const showPopup = (number: typeof activePosition) => {
    setActivePosition(number);
  }
  const hidePopup = () => {
    setActivePosition(0);
    setMenuActive(!menuActive);
  }

  console.log('menuActive: ' + menuActive);
  console.log('activePosition: ' + activePosition);
  return (
    <>
      <div className='bg-[#0F8A69] '>
        <div className='flex flex-col justify-center items-center h-screen text-white text-7xl font-bold'>
          <h2>Simple</h2>
          <h2>Quicks</h2>
        </div>
        <div className='fixed right-4 bottom-4 w-fit h-fit'>
          {activePosition === 1 ? 
          (
            <div className='relative bottom-20'>
              <TaskModal />
            </div>
          ) 
          : activePosition === 2 ?
          (
            <div className='relative bottom-20'>
              <InboxModal hidePopup={hidePopup} />
            </div>
          )
          : ''}
          <div className='text-white'>
            <Icons
              content='Task'
              position={1}
              menuActive={menuActive}
              activePosition={activePosition}
              menuHandleClick={() => showPopup(1)}
              shadowHandleClick={hidePopup}
            />
            <Icons
              content='Inbox'
              position={2}
              menuActive={menuActive}
              activePosition={activePosition}
              menuHandleClick={() => showPopup(2)}
              shadowHandleClick={hidePopup}
            />
            <Icons
              position={3}
              menuActive={menuActive}
              activePosition={activePosition}
              menuHandleClick={menuHandleClick}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
