import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function HomeQ() {
  const location = useLocation();

  useEffect(() => {
    console.log('location.search:', location.search); // 쿼리 파라미터 확인
    const query = queryString.parse(location.search);
    console.log('Parsed query:', query); // 파싱된 쿼리 파라미터 확인
  }, [location]);

  const query = queryString.parse(location.search);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Query Params: {JSON.stringify(query)}</p>
    </div>
  );
}

export default HomeQ;
