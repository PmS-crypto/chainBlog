import Link from 'next/link';
import { Player } from '@livepeer/react';
import { createClient } from 'urql';
import { useEffect,useState } from 'react';
// import { Posts } from '../data/Post.seed';
// @refresh reset

const APIURL = "https://api.studio.thegraph.com/query/42411/blogging-dapp/v0.0.5"

const query = `
query {
  postAddeds(first: 5) {
    id
    postId
    author
    imageUrl
    imageName
    assetId
    playbackId
    title
    text
    blockTimestamp
  }
}
`
const client = createClient({
  url : APIURL
})

export default function FirstPost() {
  const [postAddeds,setpostAddeds] = useState([])
  useEffect(()=>{
    fetchData()
  }, [])
  
  async function fetchData(){
    const response = await client.query(query).toPromise()
    console.log('response : ',response)
    //setaddedVoters(response.data.addedVoters)
    setpostAddeds(response.data.postAddeds)
    console.log("Author name", response.data.postAddeds[0]["author"] )
  }
  return (
    
    <>
      {/* {console.log("Author name", postAddeds[0]["author"])}
      {postAddeds[0]["author"]} */}

      <div className='card d-flex'>
      <div className='card-body'>
          <div className='card-intro'>Coming from
          <span className='text-weight-500 grey-tab pr-5'>{postAddeds[0]["author"]}</span>
        </div>
        <div className='card-intro mt-2 '>
          <span className='text-weight-medium grey-tab pr-5 text-9'>
            {/* {Posts.postDate} */}
          </span>
        </div>

        <div className='card-content mt-15'>
            <div className='postHeader'>{postAddeds[0]["title"]}</div>
            <div className='description'>{postAddeds[0]["text"]}</div>
        </div>
        <div className='tags mt-9'>
          <div className='ml-5 inline popular-tag'>
            #<span className='hash-tag'>tags required here</span>
          </div>
        </div>
        <div className='card-footer'>
          <div className='card-footer__button-group'>
            {/* <div
              className='button-wrap--medium reaction-icon'
              onClick={handleLikeClick}
            >
              {liked ? (
                <AiFillHeart className='red-heart' />
              ) : (
                <AiOutlineHeart />
              )}
              <span className='button-count'>{likes}</span>
            </div> */}
            <div>
              {/* <FaRegComment />
              <span className='button-count'>
                {Math.floor(Math.random() * 200)}
              </span> */}
                {/* <Link to="/postDetail">post detail</Link> */}
                <img src={`https://${postAddeds[0]["imageUrl"]}.ipfs.dweb.link/${postAddeds[0]["imageName"]}`} alt="txt" />
              <Player
                playbackId={postAddeds[0]["playbackId"]}
            />  
              {/* <button className='modal-submit link-text'>
                <Link href="/livepeer">Play Video</Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      
    </>
  );
}