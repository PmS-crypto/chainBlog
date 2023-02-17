import Link from 'next/link';
import { Posts } from '../data/Post.seed';

export default function FirstPost() {
  return (
    <>
      <div className='card d-flex'>
      <h1>First Post</h1>
      <div className='card-body'>
        <div className='card-intro'>
          <span className='text-weight-500 grey-tab pr-5'>{Posts.author}</span>
        </div>
        <div className='card-intro mt-2 '>
          <span className='text-weight-medium grey-tab pr-5 text-9'>
            {Posts.postDate}
          </span>
        </div>

        <div className='card-content mt-15'>
          <div className='postHeader'>{Posts.title}</div>
          <div className='description'>test description</div>
        </div>
        <div className='tags mt-9'>
          <div className='ml-5 inline popular-tag'>
            #<span className='hash-tag'>{Posts.tag}</span>
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