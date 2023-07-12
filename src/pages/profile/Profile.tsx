import { Avatar, Button } from "antd";
import styles from "./Profile.module.css";
import Title from "antd/es/typography/Title";
import {
  GiftOutlined,
  HeartOutlined,
  MailOutlined,
  EditOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {useNavigate} from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.background}>
          <Button shape="circle" icon={<LeftOutlined />} onClick={() => navigate('/')}/>
          <Button shape="circle" icon={<EditOutlined />} />
        </div>
        <Avatar size={200} className={styles.avatar}>
          <span>M</span>
        </Avatar>
      </div>
      <div className={styles.dataContainer}>
        <Title>Max Mustermann</Title>
        <div className={styles.info}>
          <span>
            <GiftOutlined /> 10.12.2003
          </span>
          <span>
            <MailOutlined /> max.mustermann@mail.de
          </span>
          <span>
            <HeartOutlined /> 43
          </span>
        </div>
        <div className={styles.commentContainer}>
          <Title level={3} className={styles.title}>
            Kommentare:
          </Title>
          <TextArea
            showCount
            maxLength={255}
            style={{ height: 150, resize: "none" }}
          ></TextArea>
          <Button type="primary" style={{ marginLeft: "auto", marginTop: 25 }}>
            Senden
          </Button>
          <div className={styles.writtenCommentsContainer}>
            <div className={styles.card}>
              <span>10:30 01.01.2022</span>
              <p>text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
