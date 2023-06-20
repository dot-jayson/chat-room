import { useState } from "react"
import { UserAuth } from "../context/AuthContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"

const SendMessage = () => {

    const [input, setInput] = useState("")

    const { currentUser } = UserAuth()

    const handleSendMessage = async (e) => {
        e.preventDefault()

        if (input.trim() === "") {
            alert("Enter valid message!")
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser
            await addDoc(collection(db, "messages"), {
                text: input,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid: uid
            })
        } catch (err) {
            console.log(err);
        }
        setInput("")
    }

    return (
        <div className="bg-gray-300 fixed bottom-0 w-full py-10 shadow-lg ">
            <form
                onSubmit={handleSendMessage}
                className="container mx-auto max-w-4xl flex px-2">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
                    type="text" />
                <button
                    type="submit"
                    className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">
                    Send
                </button>
            </form>
        </div>
    )
}

export default SendMessage