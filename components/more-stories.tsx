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
      <div className="gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories