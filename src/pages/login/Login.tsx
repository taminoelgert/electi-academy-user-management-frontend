import Title from "antd/es/typography/Title";
import styles from "./Login.module.css";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { errorCode, usePost } from "../../hooks/useApi.tsx";

const Login = () => {
  const navigate = useNavigate();
  const [login, isLoading, tryLogin] = usePost<any | errorCode>("/login");
  useEffect(() => {
    if (!login?.errorCode && login != null) navigate("/");
  }, [login]);

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
          onFinish={(values) => {
            tryLogin({ email: values.email, password: values.password });
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
            loading={isLoading}
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
