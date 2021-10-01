import axios from "axios";
import { API_URL } from "../config/constants.js";

function ResultPage() {
  // Use Effect
  // axios
  //   .post(`${API_URL}/`, {
  //     SNS: values.SNS,
  //     account: values.account,
  //   })
  //   .then((result) => {
  //     console.log(result);
  //     history.push("/result");
  //   });

  return (
    <div>
      {/* 만약 정상적인 경로로 접근하지 않았다면 "올바르지 않은 접근입니다." 메세지 출력 후 root 페이지로 이동 */}
      {/* Server에서 Response 하는 것 응답 대기 */}

      {/* Response가 왔다면 출력 */}
    </div>
  );
}

export default ResultPage;
