Certainly! Here is the updated README using Yarn instead of npm:

---

# 📇🎉 Contact List Generator Extravaganza 🎉📇

Welcome to the ultimate Contact List Generator! This project is your one-stop-shop for creating and managing a list of contacts in a fun and efficient way using TypeScript and React.

## 📚 Table of Contents

- [🚀 Introduction](#-introduction)
- [🔧 Installation](#-installation)
- [🕹️ Usage](#-usage)
- [✨ Features](#-features)
- [📦 Dependencies](#-dependencies)
- [⚙️ Configuration](#-configuration)
- [📖 Documentation](#-documentation)
- [🔍 Examples](#-examples)
- [🛠️ Troubleshooting](#-troubleshooting)
- [👥 Contributors](#-contributors)
- [📄 License](#-license)

## 🚀 Introduction

The Contact List Generator is a simple, yet powerful, tool built with TypeScript and React. It allows you to add, view, and delete contacts with ease. Perfect for those who want to keep their contacts organized in a web application.

## 🔧 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/contact-list-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd contact-list-generator
   ```
3. Install the dependencies:
   ```bash
   yarn install
   ```

## 🕹️ Usage

1. Start the development server:
   ```bash
   yarn dev
   ```
2. Open your browser and go to `http://localhost:3000`.

## ✨ Features

- 📋 Add new contacts with a name and email.
- 👀 View a list of all your contacts.
- ❌ Delete contacts you no longer need.
- 🖼️ Automatically generate avatars for your contacts.

## 📦 Dependencies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **uuid**: A library to generate unique IDs.
- **Vite**: A next-generation frontend tooling.

## ⚙️ Configuration

The project configuration can be found in the following files:

- `tsconfig.json`: TypeScript configuration.
- `.eslintrc.cjs`: ESLint configuration.

## 📖 Documentation

### Components

- **App.tsx**: The main component that holds the state and renders the contact list and input forms.
- **ContactItem.tsx**: A component to display individual contact items.

### Utilities

- **helpers.ts**: Utility functions such as `generateAvatar` to create avatars for contacts.

### Types

- **types/index.ts**: Type definitions for the project, including the `TContact` type.

## 🔍 Examples

```tsx
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
```

## 🛠️ Troubleshooting

- **Issue**: Unable to start the development server.

  - **Solution**: Ensure you have all dependencies installed by running `yarn install`.

- **Issue**: Typescript errors during compilation.
  - **Solution**: Check the `tsconfig.json` for any misconfigurations or missing type definitions.
