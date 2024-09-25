// SomeComponent.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './requests';

const SomeComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
       
      const result = await fetchData(1, 10);
      if (result && result.data) {
        setData(result.data);
      } else {
        setData([]); // 응답이 없을 때 빈 배열 설정
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!data.length) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
      <h1>광주광역시_영화관 상영관 현황</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.category} - {item.name} - {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SomeComponent;