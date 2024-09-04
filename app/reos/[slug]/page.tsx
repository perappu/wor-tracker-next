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
        <div className="text-center">
            <h2 className="!mt-1">{props.frontMatter.Name}</h2>
            <hr />
            <div className="flex flex-row pl-40 pr-40">
                <div className="basis-1/4">
            <Embed key={props.frontMatter.Link} link={props.frontMatter.Link} />
            </div>
            <div className="basis-3/4">
            <div className="text-left">
            <MDXRemote source={props.content}/>
            </div>
            </div>
            </div>
            <hr />
            <h2>Gallery</h2>
            <Gallery slug={params.slug} />
            </div>
        </>
    )
}