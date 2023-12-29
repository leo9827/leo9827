import DateFormatter from './date-formatter'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <h3 className="text-2xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-xs mb-2">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-2">{excerpt}</p>
    </div>
  )
}

export default PostPreview