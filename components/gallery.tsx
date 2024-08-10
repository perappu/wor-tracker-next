import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

function getPost({slug} : {slug : string}){
    const foldernames: string[] = fs.readdirSync(path.join('reos/' + slug + '/gallery'));

    const markdownFile = fs.readFileSync(path.join('reos/' + slug + '/gallery/gallery1.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

const Gallery = (slug: { slug: string; }) => {
    const props = getPost(slug);

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate mx-auto'>
            <h4><a href="{props.frontMatter.Link}">{props.frontMatter.Title}</a></h4>
            {props.content}
        </article>
    )
}

export default Gallery;