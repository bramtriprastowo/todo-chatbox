// type Props = {}

const ChatBox = () => {
    return (
        <div className='overflow-y-auto h-[320px]'>
            <div className="">
                <p className="text-[#E5A443]">Cameron Phillips</p>
                <div className='max-w-sm rounded bg-[#fceed3] p-2 mt-1 mb-2'>
                    <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error aut aliquid libero ipsa tempore a, doloribus qui reprehenderit deleniti esse sapiente voluptatum itaque praesentium assumenda aliquam impedit consectetur quam?</p>
                    <span>19:32</span>
                </div>
            </div>
            <div>
                <p className="text-[#E5A443]">Cameron Phillips</p>
                <div className='max-w-sm rounded bg-[#fceed3] p-2 mt-1 mb-2'>
                    <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error aut aliquid libero ipsa tempore a, doloribus qui reprehenderit deleniti esse sapiente voluptatum itaque praesentium assumenda aliquam impedit consectetur quam?</p>
                    <span>19:32</span>
                </div>
            </div>
            <div className="block w-[400px] ml-auto">
                <p className="text-[#9B51E0] text-right mr-4">You</p>
                <div className='max-w-sm rounded bg-[#EEDCFF] p-2 mt-1 mb-2'>
                    <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error aut aliquid libero ipsa tempore a, doloribus qui reprehenderit deleniti esse sapiente voluptatum itaque praesentium assumenda aliquam impedit consectetur quam?</p>
                    <span>19:32</span>
                </div>
            </div>
        </div>
    )
}

export default ChatBox