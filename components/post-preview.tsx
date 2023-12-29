import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <h3 className="text-xl mb-2 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-sm mb-1 mt-1 text-gray-500">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base leading-relaxed mb-2">{excerpt}</p>
    </div>
  )
}

export default PostPreview
