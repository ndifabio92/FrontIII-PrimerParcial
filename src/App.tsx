import './App.css'
import Form from "./components/Form.tsx";
import {useState} from "react";
import {FormData} from "./interfaces";
import Card from "./components/Card.tsx";

const App = () => {
    const [data, setData] = useState<FormData | undefined>()
    return (
        <div>
            <Form onSubmit={setData}/>
            { data && <Card name={data.name} lastName={data.lastName}/>}
        </div>
    )
}

export default App
