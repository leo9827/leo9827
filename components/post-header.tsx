import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  date: string
  author: Author
}

const PostHeader = ({ title, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">

      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">

        </div>
        <div className="mb-6 text-sm leading-loose">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
