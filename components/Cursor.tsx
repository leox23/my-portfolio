import styles from "../styles/Cursor.module.css";

interface CursorProps {
  cursorStyle?: string;
  cursorColor?: string;
}

export const Cursor = ({
  cursorStyle = "|",
  cursorColor = "inherit",
}: CursorProps): JSX.Element => {
  return (
    <span className={styles.blinkingCursor} style={{ color: cursorColor }}>
      {cursorStyle}
    </span>
  );
};
