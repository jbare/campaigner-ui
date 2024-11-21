'use client'
import axios from "axios";

import {useState} from "react";

export default function Home() {
    const [signatures, setSignatures] = useState<number>();
    const [money, setMoney] = useState<number>();
    const [pamphlets, setPamphlets] = useState<number>();

    const submitTallies = async () => {
        try {
            const data = {
                "signatures": signatures,
                "money": money,
                "pamphlets": pamphlets,
            };
            console.log(data);
            const response = await axios.post('http://localhost:8080/tallies', [data]);
            console.log(response.status, response.data);

        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div>

            <p>Enter your tallies</p>
                <p>Signatures</p>
                <input type="number" value={signatures} onChange={(e) => setSignatures(parseInt(e.target.value))}/>
                <br/>
                <p>Money</p>
            <input type="text" value={money} onChange={(e) => setMoney(parseFloat(e.target.value))}/>
            <br/>
            <p>Pamphlets</p>
            <input type="text" value={pamphlets} onChange={(e) => setPamphlets(parseInt(e.target.value))}/>
            <br/>
            <button onClick={submitTallies}>Submit</button>
        </div>
    );
}
