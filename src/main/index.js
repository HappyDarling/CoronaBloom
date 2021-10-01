import "./index.css";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Radio, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { API_URL } from "../config/constants.js";

function MainPage() {
  let history = useHistory();
  const { confirm } = Modal;

  const onFinish = function (values) {
    // 저작권 관련 방지 대책
    // 문의 받으면 개인 SNS별 코드를 발급받아 DB 일치시키기?
    if (values.Password !== "0000") {
      Modal.error({
        title: "인증키 불일치",
        content:
          "본 서비스는 인증키가 있을 경우만 사용 가능합니다. 관리자에게 문의해주시기 바랍니다.",
        centered: true,
      });
    } else {
      confirm({
        title: "약관동의",
        icon: <ExclamationCircleOutlined />,
        content: "본 서비스의 이용 약관에 동의하시겠습니까?",
        okText: "확인",
        cancelText: "취소",
        centered: true,
        onOk() {
          axios
            .post(`${API_URL}/`, {
              SNS: values.SNS,
              account: values.account,
            })
            .then((result) => {
              console.log(result);
              history.push("/result");
            });
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    }
  };

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
            onFinish={onFinish}
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
              name="account"
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
