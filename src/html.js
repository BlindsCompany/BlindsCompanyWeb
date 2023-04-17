import React from 'react';
import { Script } from 'gatsby';

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <Script
                    strategy="idle"
                    src="https://www.googletagmanager.com/gtag/js?id=AW-618513237"
                />
                <Script strategy="idle">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {
                            dataLayer.push(arguments);
                        }
                        gtag('js', new Date());
                        gtag('config', 'AW-618513237');
                    `}
                </Script>
                <Script strategy="idle">
                    {`
                        gtag('config', 'AW-618513237/bZl6COfT_-sBENWG96YC', {
                            phone_conversion_number: '(809) 535-2954',
                        });
                    `}
                </Script>
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
            </body>
        </html>
    );
}
