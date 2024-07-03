import React from "react";
import { useState } from "react";
import ContactItem from "./components/ContactItem";
import { TContact } from "./types";
import { generateAvatar } from "./utils/helpers";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contacts, setContacts] = useState<Array<TContact>>([
    {
      avatar: "https://garticphone.com/images/avatar/0.svg",
      email: "paul@gmail.com",
      id: "3",
      name: "Paul",
    },
    {
      avatar: "https://garticphone.com/images/avatar/1.svg",
      email: "alice@gmail.com",
      id: "1",
      name: "Alice",
    },
    {
      avatar: "https://garticphone.com/images/avatar/2.svg",
      email: "bob@gmail.com",
      id: "2",
      name: "Bob",
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div>Correction Contact List</div>

      {contacts.map((contact) => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            setContacts={setContacts}
          />
        );
      })}

      <div>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter your name"
          value={name}
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Enter your email address"
          value={email}
        />
        <p>{name}</p>
        <p>{email}</p>
        <button
          onClick={() => {
            setContacts((prev) => {
              return [
                ...prev,
                {
                  name: name,
                  email: email,
                  avatar: generateAvatar(),
                  id: uuidv4(),
                },
              ];
            });
          }}
        >
          Ajouter
        </button>
      </div>
    </>
  );
}

export default App;
