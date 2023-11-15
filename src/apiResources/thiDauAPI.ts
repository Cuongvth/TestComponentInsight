import axios from 'axios';

export function getBaiDauById(id: number) {
  return new Promise<any>((resolve: any, reject: any) => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://localhost:44331/api/BaiDau/${id}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function runCode(code: string, languageChoice: number, baiDauId: number) {
  console.log(baiDauId);

  const data = JSON.stringify({
    code: code,
    languageChoice: languageChoice,
    baiDauId: baiDauId,
  });

  return new Promise<any>((resolve: any, reject: any) => {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://localhost:44331/api/ThiDau/runcode`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
