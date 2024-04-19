import { useEffect, useState } from 'react';

const CurrentTime = () => {
    //let time = new Date();
    //step-2
    const [time, setTime] = useState(new Date());
    // component refresh
    useEffect(() => {
        console.log("Interval")
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => {
            clearInterval(intervalId);
            console.log("Cancelled the interval")
        };

    }, [])

    return (
        <p>This is the current time:{time.toLocaleDateString()}-
            {" "}{time.toLocaleTimeString()}</p>
    )
}
export default CurrentTime