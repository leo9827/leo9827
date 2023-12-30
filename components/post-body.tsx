import markdownStyles from './markdown-styles.module.css';
import 'github-markdown-css'; // 引入 github-markdown-css 样式

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto markdown-body">
      <div className={markdownStyles.markdown}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div> 
    </div>
  );
};

export default PostBody;