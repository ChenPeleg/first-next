export default async function  AboutPage (props :  Record<string, any>) {
    const params =  await props.params;
    console.log('About Page',params);
    return <h1> About page </h1>
}
