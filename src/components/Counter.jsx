import {Button} from "reactstrap";

export const NumberDisplay = ({number}) => {
    return <span className="number-display">{number}</span>
}

export const Counter = ({value, setValue}) => {
    return (
        <div>
            <Button color="danger" onClick={e => setValue(value - 1)}>-</Button>
            <NumberDisplay number={value} />
            <Button color="success" onClick={e => setValue(value + 1)}>+</Button>
            <Button onClick={e => value = value + 1}>+</Button>
        </div>
    );
}

export default Counter;