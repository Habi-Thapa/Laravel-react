import { Head } from "@inertiajs/react";
import React from "react";

export default function Show({ pizza }) {
    return (
        <div className="max-w-3xl mx-auto py-12">
            <Head title={"Order #" + pizza.id}></Head>
            <div className="py-8">Hello</div>
        </div>
    );
}
