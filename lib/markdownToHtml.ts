import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import gfm from 'remark-gfm';
import {unified} from 'unified'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
  .use(remarkParse)
  .use(gfm)
  .use(remarkRehype)
  .use(rehypeDocument)
  .use(rehypeFormat)
  .use(rehypeStringify)
  .process(markdown)
  return result.toString()
}


// import {marked} from 'marked';

// export default async function markdownToHtml(markdown: string) {
//   // const html = marked.parse(markdown);
//   // return html;
//   return markdown
// }