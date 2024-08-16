import ReactQueryProvider from "../utils/reactqueryprovider";


export default function Quote({
    children,
    } ,{
    children: React.ReactNode;
    }){
    return (
        <html lang='en'>
            <body>
                <ReactQueryProvider>
                    <main>{children}</main>
                </ReactQueryProvider>
            </body>
        </html>
    );
}


