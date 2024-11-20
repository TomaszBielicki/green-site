import styles from "./Message.module.css";

const Message = () => {
  return (
    <div className={styles.messageWrapper}>
      <label htmlFor="messageTextarea">Message</label>
      <textarea
        id="messageTextarea"
        aria-labelledby="messageLabel"
        placeholder="Text here..."
      />
    </div>
  );
};

export default Message;
