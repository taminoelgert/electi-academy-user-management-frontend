import { Avatar, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import styles from "./ProfileRow.module.css";
import {useNavigate} from "react-router-dom";

const ProfileRow = ({id, name, birthday, isAdmin}) => {
    const navigate = useNavigate()
  return (
    <div className={styles.profileRow} onClick={()=> {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        navigate(`/profile/${id}`);
    }}>
      <Avatar size={40} style={{ backgroundColor: "#729eca" }}>
        MM
      </Avatar>
      <div>
        <p className={styles.title}>Name:</p>
        <p className={styles.value}>{name}</p>
      </div>
      <div>
        <p className={styles.title}>Geburtsdatum:</p>
        <p className={styles.value}>{birthday}</p>
      </div>
      <div>
        <p className={styles.title}>ist Admin:</p>
        <p className={styles.value}>{isAdmin? 'wahr': 'falsch'}</p>
      </div>
      <Button shape="circle" icon={<EditOutlined />} />
    </div>
  );
};

export default ProfileRow;
