import React from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const POSTS = gql`
  query {
    posts {
      id
      title
      content
    }
  }
`

function App() {
  const [title, setTitle] = React.useState<string>();
  const [content, setContent] = React.useState<string>();

  const { data, loading, error } = useQuery(POSTS);
  
  const handleClickAddButton = () => {
    // 여기서 mutation을 요청하세요.
  }
  return (
    <div className="App">
      <table>
        <tr>
          <th>제목</th>
          <th>작성자</th>
        </tr>
        {loading ? (
          <span>로딩중..</span>
        ) : (
          !data || error ? (
            <span>데이터를 가져오지 못했습니다.</span>
          ) : (
            data.posts.map((post: any) => (
              <tr>
                <td>{post.title}</td>
                <td>{post.content}</td>
              </tr>
            ))
          )
        )}
        
      </table>
      <div style={{ border: '1px solid #ddd', display: 'flex', flexDirection: 'column', marginTop: '20px', padding: '12px', width: '500px' }}>
        <div>
          제목: <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          내용: <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button onClick={handleClickAddButton}>포스트 추가</button>
      </div>
    </div>
  );
}

export default App;
