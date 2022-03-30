import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
    const counter = useCounter();

    return <h1>
        {counter}
    </h1>
}

export default ForwardCounter