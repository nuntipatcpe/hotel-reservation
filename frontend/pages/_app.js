import { useRouter } from "next/router";
import Layout from "./compoment/Layout/Layout";
import AdminLayout from "./compoment/Layout/AdminLayout";
import findRouterAdmin from "./utils/findRouterAdmin";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === "/admin") {
    return <Component {...pageProps} />;
  } else if (findRouterAdmin(router.pathname, "/admin/")) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    );
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
