import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
    // get all your mdx files
    const foldernames: string[] = fs.readdirSync(path.join('./reos'));
    const reos: string[] = [];

    // let's use the filenames without `.mdx` extension as our slugs
    foldernames.map((foldername) => {
        const file = fs.readFileSync(path.join('./reos/', foldername + '/page.mdx'), 'utf8');
        const name = matter(file).data.Name;
        reos.push(name);
    });

    return reos;
}

type Reo = {
    data: Record<string, unknown>
}


function getPost({slug} : {slug : string}){
    const markdownFile = fs.readFileSync(path.join('reos/' + slug + '/page.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        content
    }
}

export default async function Page({ params }: { params: string }) {
    const props = getPost(params);

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
            <h2>{props.frontMatter.name}</h2>
            <MDXRemote source={props.content}/>
        </article>
    )
}