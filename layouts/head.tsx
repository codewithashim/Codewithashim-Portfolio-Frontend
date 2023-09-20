import React from "react";
import NextHead from "next/head";
import { siteConfig } from "@/config/site";

export const Head = () => {
	return (
		<NextHead>
			<title>{siteConfig.name}</title>
			<meta key="title" content={siteConfig.name} property="og:title" />
			<meta content={siteConfig.description} property="og:description" />
			<meta content={siteConfig.description} name="description" />
			<meta
				key="viewport"
				content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				name="viewport"
			/>
			<meta name="description" content="Hi ! I’m Ashim Rudra Paul. I am MERN Stack Engineer, and Programmer. I have about 2 years of working experience on this field. If I discribe myself in one sentence then it will be I am a speed learner. I love to learn new things." />
			<meta name="keywords" content="Ashim_Rudra_Paul,Ashim,Rudra,Codewithashim,Programmer,Javascript_Developer, ashimrudrapaul, developerashim,code,matrix,math,pythone,pythonedeveloperashim,pythonedeveloper, c#,c,java,nodejs,react,bootstrap,mongodb,sylhet polytechnic institute,arp,spi,srp,asr,ab" />
			<link href="/codewithashim.jpg" rel="icon" />
		</NextHead>
	);
};
