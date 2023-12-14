import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'

type Props = {
    type: "text" | "date",
    name: string,
    value: string,
    onChange: (e: any) => void,
    placeholder?: string
    className?: string
}

const EditableSpan = (props: Props) => {
    const [isInputShowing, setIsInputShowing] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const showInput = () => {
        setIsInputShowing(true);
    }
    const hideInput = () => {
        setIsInputShowing(false);
    }
    const formatDate = (date: string) => {
        const arr = date.split("-");
        let formattedDate = `${arr[2]}/${arr[1]}/${arr[0]}`;
        return formattedDate;
    }
    useEffect(() => {
        if (isInputShowing) {
            inputRef.current?.focus();
            textAreaRef?.current?.focus();
        }
    }, [isInputShowing])

    return (
        <>
            <span className={(isInputShowing ? 'hidden ' : '') + (props.name === 'title' ? 'max-w-[300px] block ' : '') + 'cursor-pointer relative ' + props.className} onClick={showInput}>
                {(props.value && props.type === 'date' ? formatDate(props.value)
                    : props.value ? props.value
                        : props.placeholder || '')}

                {props.name === 'desc' ? (
                    <FontAwesomeIcon icon={faPencil} className='mt-1 mr-4 absolute -left-8 top-0 text-transparent' />)
                    : ''}
            </span>
            {props.type === 'date' ? (
                <input
                    ref={inputRef}
                    className={(isInputShowing ? '' : 'hidden ') + props.className}
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    onBlur={hideInput}
                />
            ) : (
                <ReactTextareaAutosize
                    ref={textAreaRef}
                    className={(isInputShowing ? '' : 'hidden ') + (props.name === 'title' ? 'w-[300px] block ' : 'w-full ') + props.className}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    onBlur={hideInput}
                />
            )}

        </>
    )
}

export default EditableSpan