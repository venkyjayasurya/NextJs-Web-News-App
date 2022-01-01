import { server } from "../../../config";
import { useRouter } from "next/router";
import Link from "next/link";
const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// getServerSideProps
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default article;

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
