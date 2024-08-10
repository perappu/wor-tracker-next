import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Gallery from '@/components/gallery';

export async function generateStaticParams() {
    // get all your mdx files
    const foldernames: string[] = fs.readdirSync(path.join('./reos'));

    return foldernames.map((foldername) => ({
        slug: foldername,
    }))
}

function getPost({slug} : {slug : string}){
    const markdownFile = fs.readFileSync(path.join('reos/' + slug + '/page.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const props = getPost(params);

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate mx-auto'>
            <h2>{props.frontMatter.Name}</h2>
            <a href={props.frontMatter.Link}>Import Link</a>
            <MDXRemote source={props.content}/>
            <hr />
            <h3>Gallery</h3>
            <Gallery slug={params.slug} />
        </article>
    )
}