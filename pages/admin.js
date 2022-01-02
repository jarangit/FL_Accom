import React from 'react'
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch("https://www.accomasia.co.th/api/v1/masterdata");
    const posts = await res.json();
    console.log(posts);
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    };
  }
const Admin = ({posts}) => {
    console.log(posts)
    return (
        <div>
        For test     
        </div>
    )
}

export default Admin
