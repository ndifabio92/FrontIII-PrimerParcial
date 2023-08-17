import {FC} from "react";
import { FormData } from "../interfaces";
const Card: FC<FormData> = ({name, age}) => {
    return (
        <div>
            <h2>Result</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

export default Card;