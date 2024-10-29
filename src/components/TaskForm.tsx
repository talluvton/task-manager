import React from 'react'

interface Props {
    handleOnSubmit: (value: string) => void
}

const TaskForm:React.FC<Props> = ({handleOnSubmit}) => {
    const [inputValue,setinputValue] = React.useState('')

    return (<form onSubmit={(e) => {
        e.preventDefault()
        handleOnSubmit(inputValue)
        setinputValue('')
    }}> <>Add a task:</>
        <input
            type='text'
            className='task'
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
        />
    </form>)

}

export default TaskForm