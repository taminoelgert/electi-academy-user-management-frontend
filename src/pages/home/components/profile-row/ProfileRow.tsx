import { Avatar, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import styles from "./ProfileRow.module.css";

const ProfileRow = () => {
  return (
    <div className={styles.profileRow}>
      <Avatar size={40}>MM</Avatar>
      <div>
        <p className={styles.title}>Name:</p>
        <p className={styles.value}>Max Mustermann</p>
      </div>
      <div>
        <p className={styles.title}>Geburtsdatum:</p>
        <p className={styles.value}>18.10.2003</p>
      </div>
      <div>
        <p className={styles.title}>ist Admin:</p>
        <p className={styles.value}>wahr</p>
      </div>
      <Button shape="circle" icon={<EditOutlined />} />
    </div>
  );
};

export default ProfileRow;
