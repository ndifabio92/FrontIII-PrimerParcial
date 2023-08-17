import {FC} from "react";
import { FormData } from "../interfaces";
const Card: FC<FormData> = ({name, lastName}) => {
    return (
        <div>
            <h2>Result</h2>
            <p>Name: {name}</p>
            <p>LastName: {lastName}</p>
        </div>
    );
}

export default Card;