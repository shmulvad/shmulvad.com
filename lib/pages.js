import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

const dataDirectory = path.join(process.cwd(), 'data');

export async function getPageMarkdown(page) {
  const fullPath = path.join(dataDirectory, `${page}.md`)
  if (!fs.existsSync(fullPath)) {
    return { error: true };
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(fileContents)
  const contentHtml = processedContent.toString();

  const count = fileContents
    .split(/\s+/)
    .map(s => s.replace(/\W/g, ''))
    .filter(s => s.length).length;

  return { contentHtml, count };
}
