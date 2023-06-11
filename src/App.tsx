import React from 'react';
import './App.css';
import { gql, useMutation, useQuery } from '@apollo/client';

const POSTS = gql`
  query {
    posts {
      id
      title
      content
    }
  }
`

const CREATE_POST = gql`
  mutation createPost($data: CreatePostInput!) {
    createPost(data: $data) {
      id
      title
      content
    }
  }
`
const WRITER_ID = "user-1";

function App() {
  const [title, setTitle] = React.useState<string>();
  const [content, setContent] = React.useState<string>();

  const { data, loading, error } = useQuery(POSTS);
  const [craetePostMutation, { loading: createPostLoading }] = useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      cache.modify({
        fields: {
          posts(exisitingPosts = []) {
            const newPostRef = cache.writeFragment({
              data: createPost,
              fragment: gql`
                fragment NewPost on Post {
                  id
                  title
                  content
                }
              `
            })

            return [...exisitingPosts, newPostRef]
          }
        }
      })
    }
  });
  
  const handleClickAddButton = () => {
    // 여기서 mutation을 요청하세요.
    // mutation 동작 후, https://www.apollographql.com/docs/react/data/mutations/#the-update-function 름 참고해서 posts 쿼리 캐시를 업데이트해보세요.
    craetePostMutation({
      variables: {
        data: {
          title,
          content,
          writerId: WRITER_ID,
        }
      }
    })
  }
  return (
    <div className="App">
      <table>
        <tr>
          <th>제목</th>
          <th>내용</th>
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
        <button onClick={handleClickAddButton} disabled={createPostLoading}>포스트 추가</button>
      </div>
    </div>
  );
}

export default App;
