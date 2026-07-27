"use client";

import { useMemo, useState } from "react";
import { products } from "../data/products";

export default function useProducts() {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("Todos");

    const [sort, setSort] = useState("default");

    const filteredProducts = useMemo(() => {

        let result = [...products];

        if (category !== "Todos") {

            result = result.filter(
                product => product.category === category
            );

        }

        if (search.trim()) {

            result = result.filter(product =>
                product.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );

        }

        if (sort === "price-asc") {

            result.sort((a, b) => a.price - b.price);

        }

        if (sort === "price-desc") {

            result.sort((a, b) => b.price - a.price);

        }

        return result;

    }, [search, category, sort]);

    return {

        search,
        setSearch,

        category,
        setCategory,

        sort,
        setSort,

        filteredProducts,

    };

}
