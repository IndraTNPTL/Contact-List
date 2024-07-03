import React from "react";
import { TContact } from "../types";

export default function ContactItem({
  contact,
  setContacts,
}: {
  contact: TContact;
  setContacts: React.Dispatch<React.SetStateAction<TContact[]>>;
}): JSX.Element {
  return (
    <div style={{ border: "1px solid orange", marginBottom: "1rem" }}>
      <p>{contact.name}</p>
      <img src={contact.avatar} alt="contact avatar" />
      <button
        onClick={() => {
          setContacts((prev) => prev.filter((prev) => prev.id !== contact.id));
        }}
      >
        Supprimer
      </button>
    </div>
  );
}
