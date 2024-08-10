
import matter from "gray-matter";
import path from 'path';
import Dropdown from "./dropdown";

const fs = require('fs');

async function getResources(): Promise<Category[]> {
    const foldernames: string[] = fs.readdirSync(path.join('./reos'));
    const categories: Category[] = [];

    //get each folder and the metadata within it
    foldernames.map((foldername) => {
        const file = fs.readFileSync(path.join('./reos', foldername, 'page.mdx'), 'utf8');
        const data = matter(file).data;

        if (!categories.find(i => i.name === data.Category)) {

            let category: Category = { name: data.Category, reos: [] }
            category.reos.push({ slug: foldername, data: data });
            categories.push(category);

        } else {

            categories.find(i => i.name === data.Category)?.reos.push({ slug: foldername, data: data });

        }
    });

    return categories;
}

type Category = {
    name: string,
    reos: Reo[]
}

type Reo = {
    slug: string,
    data: {[key: string]: any}
}

async function Dropdowns() {
    const resources = await getResources();

    return (<>
        <nav>
            {resources.map((categories) => (<>
                <Dropdown {...categories} />
            </>
            ))}
        </nav>
    </>)
}

export default Dropdowns;