import styles from "@/styles/Home.module.css";
import Link from "next/link";

//ここのURLはlocalhost:3000/products(フォルダ名のインデックスファイル)/[id].tsx
//これはもうそういう造り。indexがあればその後に[id].tsxファイルのpathがはいる
//indexファイルがなくいきなり[id].tsxやりたい場合はgetStaticPathsが必要

function ProductsList() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>

        <ul>
          <li>
            <Link href="/products/smartphone">スマートフォン</Link>
          </li>
          <li>
            <Link href="/products/pc">パソコン</Link>
          </li>
          <li>
            <Link href="/products/headphone">ヘッドフォン</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default ProductsList;
