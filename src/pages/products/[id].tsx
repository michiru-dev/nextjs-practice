import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

//SSG
// export async function getStaticProps({ params }: { params: string }) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// }

//getStaticPathsとgetStaticPropsはセット
//getStaticPropsでparamsを受け取らない場合はセットじゃなくて　OK
//getStaticPropsやgetServerSidePropsで受け取るparamsは/の後のpathだけどアクセス時にかそれがとれてこない
//つまりgetStaticPropsはビルド時なのでアクセスがされないためparamsに渡ってくるものがない、
//それをgetStaticPathsで代わりにわたす！だからparamsがいるなら必ずセット！
// export async function getStaticPaths() {
//   const req = await fetch(`http://localhost:3000/products.json`);
//   const data = await req.json();

//   const paths = data.map((product: string) => {
//     return {
//       params: {
//         id: product,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

//ここの引数のparamsはアクセスされた[id]が自動で入る
//SSGの時はparamsを指定してたけど、これの場合はアクセス時に勝手に入る
export async function getServerSideProps({ params }: { params: any }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: {
      product: data,
    },
  };
}

function Product({ product }: { product: any }) {
  const router = useRouter();
  const { id } = router.query;

  const handleButtonClick = () => {
    router.push("/products/pc");
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{id}のページです</h1>
        <img src={product.image} alt="" width="300" height="400" />
        <p>{product.name}</p>
        <Link href="/products">商品一覧へ</Link>
        <button onClick={handleButtonClick}>ボタン</button>
      </main>
    </div>
  );
}

export default Product;
