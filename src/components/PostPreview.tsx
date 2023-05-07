import styles from "../styles/_postDefault.module.scss";

export const PostPreview = ({ text }: { text: string }) => {
  return (
    <div
      className={`dark:bg-slate-950 p-5 bg-white shadow-lg shadow-rgba[(0,0,0,0.5)] ${styles.main}`}
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  );
};
