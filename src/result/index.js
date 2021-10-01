import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Modal } from "antd";
import { API_URL } from "../config/constants.js";

// DB 연동해서 SNS ID / 세션키 값으로 DB 생성
// 매번 실행할때마다 DB 갱신

function ResultPage() {
  let history = useHistory();
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
          history.push("/");
        } else {
        }
      });
  }, []);

  return (
    <div>
      {/* 만약 정상적인 경로로 접근하지 않았다면 "올바르지 않은 접근입니다." 메세지 출력 후 root 페이지로 이동 */}
      {/* Server에서 Response 하는 것 응답 대기 */}

      {/* Response가 왔다면 출력 */}
    </div>
  );
}

export default ResultPage;
