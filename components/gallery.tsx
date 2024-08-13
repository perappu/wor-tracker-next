import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import fetch from 'node-fetch';
import Embed from './embed';

function getPost({slug} : {slug : string}){
    const filenames: string[] = fs.readdirSync(path.join('reos/' + slug + '/gallery'));

    const images = filenames.map((filename) => {

        const markdownFile = fs.readFileSync(path.join('reos/' + slug + '/gallery/' + filename), 'utf-8')

        const { data: frontMatter, content } = matter(markdownFile)

        return {
            matter: frontMatter,
            content: content,
        }
    });

    return images;
}

const Gallery = (slug: { slug: string; }) => {
    const images = getPost(slug);

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate mx-auto grid grid-cols-2'>
            {images.map((image) => {
                return <>
                <div className="">
                <Embed key={image.matter.Link} link={image.matter.Link} />
                <p>{image.content}</p>
                </div>
                </>;
            })
            }
        </article>
    )
}

export default Gallery;