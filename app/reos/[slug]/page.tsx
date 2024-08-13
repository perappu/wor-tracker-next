import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Gallery from '@/components/gallery';
import Embed from '@/components/embed';

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
        <>
            <h2>{props.frontMatter.Name}</h2>
            <div className="grid grid-cols-2">
            <Embed key={props.frontMatter.Link} link={props.frontMatter.Link} />
            <div>
            <MDXRemote source={props.content}/>
            </div>
            </div>
            <hr />
            <h3>Gallery</h3>
            <Gallery slug={params.slug} />
        </>
    )
}