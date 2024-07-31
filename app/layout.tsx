import type { Metadata } from "next";
import LocalFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const inter = LocalFont({
  src: "../public/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "GSMAN",
  description: "소프트웨어마이스터고 프로젝트 리스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="channelTalk"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();

          ChannelIO('boot', {
            "pluginKey": "${process.env.CHANNEL_IO_TOKEN}"
          });`,
        }}
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
