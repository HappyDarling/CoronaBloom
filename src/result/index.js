import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Modal, Row, Col, Descriptions, Badge, Tree } from "antd";
import { API_URL } from "../config/constants.js";

// DB 연동해서 SNS ID / 세션키 값으로 DB 생성
// 매번 실행할때마다 DB 갱신

function ResultPage() {
  let history = useHistory();
  const { DirectoryTree } = Tree;

  const [loading, setLoading] = useState(null);

  // 트리 목록 구성
  const treeData = [
    {
      title: "parent 0",
      key: "0-0",
      children: [
        { title: "leaf 0-0", key: "0-0-0", isLeaf: true },
        { title: "leaf 0-1", key: "0-0-1", isLeaf: true },
      ],
    },
    {
      title: "parent 1",
      key: "0-1",
      children: [
        { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
        { title: "leaf 1-1", key: "0-1-1", isLeaf: true },
      ],
    },
  ];

  // Tree 구조 Select와 Expend 이벤트 처리
  const onSelect = (keys, info) => {
    console.log("Trigger Select", keys, info);
  };
  const onExpand = () => {
    console.log("Trigger Expand");
  };

  React.useEffect(() => {
    axios
      .post(`${API_URL}/result`, {
        SNS: window.sessionStorage.getItem("SNS"),
        account: window.sessionStorage.getItem("account"),
        auth: window.sessionStorage.getItem("auth"),
      })
      .then((result) => {
        const { Code, Title, Message } = result.data;
        if (Code === (1, 2)) {
          // 방어코드 응답
          Modal.error({
            title: Title,
            content: Message,
          });
          window.sessionStorage.clear();
          history.push("/");
        } else {
        }
      })
      .catch((error) => {
        Modal.error({
          title: "ERROR",
          content: "예상하지 못한 에러가 발생하였습니다.",
        });
        window.sessionStorage.clear();
        history.push("/");
      });
  }, []);

  return (
    <div>
      {/* 만약 정상적인 경로로 접근하지 않았다면 "올바르지 않은 접근입니다." 메세지 출력 후 root 페이지로 이동 */}
      {/* Server에서 Response 하는 것 응답 대기 */}

      {/* Response가 왔다면 출력 */}

      {/* 디스플레이 화면 구상 */}
      <Row justify="start">
        <Col span={4}>
          <DirectoryTree
            multiple
            defaultExpandAll
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
          />
        </Col>
        <Col span={18}>
          <Descriptions title="User Info" bordered>
            <Descriptions.Item label="사용자 아이디">
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="닉네임">Prepaid</Descriptions.Item>
            <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
            <Descriptions.Item label="Order time">
              2018-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Usage Time" span={2}>
              2019-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              <Badge status="processing" text="Running" />
            </Descriptions.Item>
            <Descriptions.Item label="Negotiated Amount">
              $80.00
            </Descriptions.Item>
            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official Receipts">
              $60.00
            </Descriptions.Item>
            <Descriptions.Item label="Config Info">
              Data disk type: MongoDB
              <br />
              Database version: 3.4
              <br />
              Package: dds.mongo.mid
              <br />
              Storage space: 10 GB
              <br />
              Replication factor: 3
              <br />
              Region: East China 1<br />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}

export default ResultPage;
