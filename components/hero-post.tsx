import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({title, date, excerpt, slug}: Props) => {
  return (
    <section>
      <div className="mb-2 md:mb-10 md:mt-10">
        <div>
          <h3 className="mb-4 text-2xl lg:text-2xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="text-base mb-1 mt-1 text-gray-500">
            <DateFormatter dateString={date}/>
          </div>
          <p className="text-lg leading-relaxed mb-2">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost