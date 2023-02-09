import { RiDeleteBin6Line } from "react-icons/ri";

function MessageComponent({ selectedContact, messages, setMessages }) {
  const filtered = messages.filter((message) => {
    return (
      message.recieverId === selectedContact.id && message.senderId === 7000
    );
  });

  const onDeleteMessage = (id) => {
    fetch(`http://localhost:3333/delete/message/${id}`, {
      method: "DELETE",
    });
    setMessages(
      messages.filter((messages) => {
        return messages.id !== id;
      })
    );
  };

  return (
    <div className="message-wrapper">
      {filtered.map((messages) => {
        return (
          <div className="message-bg">
            <div className="messages">
              {messages.text}
              <button
                className="delete-message"
                onClick={() => onDeleteMessage(messages.id)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageComponent;
