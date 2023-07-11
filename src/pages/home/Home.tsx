import { Header } from "../../components/header/Header.jsx";
import styles from "./Home.module.css";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title.js";
import { ProfileRow } from "./components/profile-row";

const Home = () => {
  return (
    <>
      <Header title={"Home"} />
      <div className={styles.content}>
        <Title level={3} className={styles.title}>
          Gefundene Profile:
        </Title>
        <ProfileRow />
        <ProfileRow />
        <ProfileRow />
        <ProfileRow />
      </div>
      <FloatButton
        shape={"circle"}
        type={"primary"}
        style={{ width: 60, height: 60 }}
        icon={
          <PlusOutlined
            style={{ position: "absolute", fontSize: 30, top: 15, left: 15 }}
          />
        }
      />
    </>
  );
};

export { Home };
