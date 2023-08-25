const DateDisplay = (props) => {
    const displayDate = (date) => {
        const currentDate = Date.now();
        return <div>{currentDate}</div>
    }
    return setInterval(displayDate(props.date), 1000)
}

export default DateDisplay;