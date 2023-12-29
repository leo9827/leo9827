import DateFormatter from './date-formatter'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({title, date, excerpt, slug}: Props) => {
  return (
    <section>
      <div className="mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-2xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="text-xs mb-2">
            <DateFormatter dateString={date}/>
          </div>
          <p className="text-lg leading-relaxed mb-2">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost