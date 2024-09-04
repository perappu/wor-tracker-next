export default async function Embed(link: any) {
    const data = await fetch('https://backend.deviantart.com/oembed?url=' + link.link).then((res) =>
        res.json()
      )
   
    return <>
    <div className="text-center">
    <a href={link.link}><img className="mx-auto" src={data.thumbnail_url} /></a>
    <a href={link.link}><b>{data.title}</b></a><br /> by <a href={data.author_url}>{data.author_name}</a>
    </div>
    </>;
  }