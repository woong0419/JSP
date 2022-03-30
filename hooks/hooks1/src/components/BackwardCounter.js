import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
    const counter = useCounter(false);

    return <h1>
        {counter}
    </h1>
}

export default BackwardCounter