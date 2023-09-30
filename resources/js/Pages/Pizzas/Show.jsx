import { Head, router } from "@inertiajs/react";
import React, { useEffect } from "react";
import PizzaStatus from "./Partials/PizzaStatus";

export default function Show({ pizza }) {
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({ only: ["pizza"] });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="max-w-3xl mx-auto py-12">
            <Head title={"Order #" + pizza.id}></Head>
            <div className="py-8">Hello</div>
            <PizzaStatus currentStatus={pizza.status}></PizzaStatus>
            <div className="text-center mt-4">
                <p className="text-lg">
                    {pizza.chef} started {pizza.status.toLowerCase()} your order{" "}
                    <span className="underline font-semibold">
                        {pizza.last_updated}
                    </span>
                </p>
            </div>
        </div>
    );
}
