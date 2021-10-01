import "./index.css";
import { Form, Input, Button, Radio } from "antd";

function MainPage() {
  return (
    <div>
      <div id="main-bg">
        <div id="main-header"></div>
        <div id="form-box">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div id="form-box-header">Corona BLoom</div>
            <Form.Item
              label="SNS"
              name="SNS"
              rules={[
                {
                  required: true,
                  message: "사용하시는 SNS 계정을 선택해주세요.",
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="Facebook">Facebook</Radio.Button>
                <Radio.Button value="Twitter">Twitter</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="아이디"
              name="Account"
              rules={[
                {
                  required: true,
                  message: "사용하시는 SNS 계정을 입력해주세요.",
                },
              ]}
            >
              <Input style={{ width: "70%" }} />
            </Form.Item>

            <Form.Item
              label="인증키"
              name="Password"
              rules={[{ required: true, message: "인증키를 입력해주세요." }]}
            >
              <Input.Password style={{ width: "70%" }} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div id="main-footer"></div>
      </div>
    </div>
  );
}

export default MainPage;
