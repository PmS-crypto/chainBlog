import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { useAppContext } from '../context/context'
import { Posts } from '../data/Post.seed'
import Link from 'next/link'
// import { Link } from 'react-router-dom';

const Post = ({
  postId,
  author,
  text,
  tags,
  value,
  imageUrl,
  imageName,
  assetId,
  playbackId,
  title,
}) => {
  // const { likePost, currentWalletAddress } = useAppContext()
  // const [liked, setLiked] = useState(likers.includes(currentWalletAddress))

  const postDate = new Date(parseInt(timestamp)).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  })

  // const handleLikeClick = async () => {
  //   await likePost(index)

  //   setLiked(true)
  // }

  return (
    <div className='card d-flex'>
      <div className='avatar-wrap relative'>
        <Image
          className='avatar--small'
          src={`https://avatars.dicebear.com/api/identicon/${author}.svg`}
          alt='Avatar'
          layout='fill'
        />
      </div>
      <div className='card-body'>
        <div className='card-intro'>
          <span className='text-weight-500 grey-tab pr-5'>{author}</span>
        </div>
        <div className='card-intro mt-2 '>
          <span className='text-weight-medium grey-tab pr-5 text-9'>
            {postDate}
          </span>
        </div>

        <div className='card-content mt-15'>
          <div className='postHeader'>{title}</div>
          <div className='description'>test description</div>
        </div>
        <div className='tags mt-9'>
          <div className='ml-5 inline popular-tag'>
            #<span className='hash-tag'>{tag}</span>
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
              <button className='modal-submit link-text'>
                <Link href='/postDetail'>Read more</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
