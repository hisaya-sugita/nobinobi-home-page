import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>合同会社のびのび</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="合同会社のびのび" />
        <p className="description">
          事業概要
        </p>
        <p className="description">
          システム及びアプリケーションの開発を行っています。
          お問い合わせの際は下記のメールアドレスにご連絡をお願いいたします。
          <br/>
          pswty180@gmail.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
