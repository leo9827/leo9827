import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({posts}: Props) => {
  return (
    <section>
      <h4 className="mb-4 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">
        More Posts
      </h4>
      <div className="gap-y-10 md:gap-y-10 mb-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories