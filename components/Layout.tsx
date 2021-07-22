import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Saleor SDK + Next.js" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <div className="mt-4 mb-4 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium mb-2">
          Saleor SDK + Next.js
        </h1>
      </div>
      <nav>
        <div className="mt-1 mb-1 text-center max-w-2xl mx-auto">
          <Link href="https://github.com/mirumee/saleor-sdk">
            <a>SDK GitHub</a>
          </Link>{" "}
          |{" "}
          <Link href="https://docs.saleor.io/">
            <a>Saleor Docs</a>
          </Link>
        </div>
      </nav>
    </header>
    <div className="w-9/12  mx-auto">{children}</div>
    <footer>
      <div className="mt-12 text-center">
        <p className="text-gray-500">
          <a href="https://saleor.io/">
            © Copyright Saleor Commerce {new Date().getFullYear()}
          </a>
        </p>
      </div>
    </footer>
  </>
);

export default Layout;
