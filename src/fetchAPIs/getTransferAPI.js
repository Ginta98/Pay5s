import { TRANSFER_GET } from "../api/Api";

export default function GetTransferAPI(token_user) {
  return new Promise((resolve, reject) => {

    const url = TRANSFER_GET
    fetch(url, {
      method: "GET",
      headers: {"token":token_user},
    })
      .then((response) => response.json())
      .then((res) => {

        resolve(res);
        console.log(res)
      })
      .catch((error) => {
        reject(error);
      });
  });
}
