import ReactQueryProvider from "../reactqueryprovider";
import React, {ReactNode} from "react";

export default function Quote(props: {
    children: React.ReactNode
    }){
    return (
        <html lang='en'>
            <body>
                <ReactQueryProvider>
                    <main>{props.children}</main>
                </ReactQueryProvider>
            </body>
        </html>
    );
}


