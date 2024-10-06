import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = { title: "About | Boldo" };

const AboutPage = dynamic(() => import("../components/index"));

const HomePage = () => <AboutPage />;

export default HomePage;
