import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mx-auto">
        <div className="mb-2 text-sm text-gray-400 leading-loose">
          Post on <DateFormatter dateString={date} />
        </div>
        <hr className="mb-4"/>
      </div>
    </>
  )
}

export default PostHeader
