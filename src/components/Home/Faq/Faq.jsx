import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What types of properties are available in the project?",
            content: `We offer a diverse range of properties, including spacious apartments, luxurious villas, and versatile commercial spaces.`,
        },
        {
            title: "What are the key amenities provided in the project?",
            content: "Our project boasts state-of-the-art amenities, including secure parking, 24/7 security, landscaped gardens, and recreational areas for residents.",
        },
        {
            title: "What is the pricing structure?",
            content: `Our pricing is competitive and transparent. For detailed information, please refer to our brochure or get in touch with our sales team.`,
        },
        {
            title: "What are the financing options available?",
            content: `We collaborate with leading financial institutions to provide attractive financing options and mortgage solutions tailored to our buyers' needs.`,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function App {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}