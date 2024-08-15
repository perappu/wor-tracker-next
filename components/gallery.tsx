import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import fetch from 'node-fetch';
import Embed from './embed';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Category = {
    name: string,
    images: Image[]
}

type Image = {
    matter: { [key: string]: any },
    content: string
}

function getImages({ slug }: { slug: string }) {
    const filenames: string[] = fs.readdirSync(path.join('reos/' + slug + '/gallery'));

    if (filenames) {
        const images = filenames.map((filename) => {

            const markdownFile = fs.readFileSync(path.join('reos/' + slug + '/gallery/' + filename), 'utf-8')

            const { data: frontMatter, content } = matter(markdownFile)

            return {
                matter: frontMatter,
                content: content,
            }
        });

        return images;
    } else {
        return [];
    }

}

function sortImages(images: Image[]) {
    const categories: Category[] = [];

    //get each folder and the metadata within it
    images.map((image) => {
        if (!categories.find(i => i.name === image.matter.Category)) {

            let category: Category = { name: image.matter.Category, images: [] }
            category.images.push(image);
            categories.push(category);

        } else {
            categories.find(i => i.name === image.matter.Category)?.images.push(image);
        }
    });

    return categories;

}

const Gallery = (slug: { slug: string; }) => {
    // get the images
    var images: Image[] = getImages(slug);

    // calculate total CP
    var cpTotal: number = 0;
    images.map((image) => {
        return cpTotal + parseInt(image.matter.CP)
    });

    // sort the images into categories
    var categories: Category[] = sortImages(images);

    return (
        <>
            <h4 className="font-semibold">Total CP: {cpTotal}</h4>
            {categories.map((category) => {
                return <>
                    <h3>{category.name}</h3>
                    <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate mx-auto grid grid-cols-2'>
                        {category.images.map((image) => {
                            return <>
                                <div className="">
                                    <Embed key={image.matter.Link} link={image.matter.Link} />
                                    <MDXRemote source={image.content}/>
                                </div>
                            </>;
                        })}
                    </article>
                </>
            })}
        </>
    )
}

export default Gallery;