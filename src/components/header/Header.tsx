import styles from "./Header.module.css";
import { Avatar, Dropdown, Typography } from "antd";

import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const Header = ({ title }) => {
  const navigate = useNavigate();
  const items: any[] = [
    {
      key: "1",
      label: (
        <div style={{ minWidth: 200 }}>
          <div style={{ fontWeight: 600 }}>Max Mustermann</div>
          <div style={{ fontWeight: 300 }}>max.mustermann@mail.de</div>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <>
          <span>Profil</span>
        </>
      ),
    },
    {
      key: "3",
      label: <span>Home</span>,
    },
    {
      type: "divider",
    },
    {
      key: "4",
      danger: true,
      label: "Logout",
      onClick: () => {
        navigate("/logout");
      },
    },
  ];

  return (
    <div className={styles.headerContainer}>
      <Title level={2} className={styles.title}>
        {title}
      </Title>
      <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
        <Avatar style={{ cursor: "pointer" }} size={35}>
          {" "}
          M{" "}
        </Avatar>
      </Dropdown>
    </div>
  );
};

export { Header };
