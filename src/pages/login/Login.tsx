import Title from "antd/es/typography/Title";
import styles from "./Login.module.css";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Title level={1} className={styles.title}>
          Login
        </Title>
        <Form
          name="normal_login"
          className={styles.loginForm}
          initialValues={{ remember: true }}
          onFinish={() => {
            navigate("/home");
          }}
        >
          <Form.Item
            className={styles.formItem}
            name="username"
            rules={[
              {
                required: true,
                message: "Bitte geben Sie ihre Email/Username ein",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            className={styles.formItem}
            name="password"
            rules={[
              { required: true, message: "Bitte geben Sie ihr Passwort ein" },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={false}
            className={styles.loginFormButton}
          >
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
