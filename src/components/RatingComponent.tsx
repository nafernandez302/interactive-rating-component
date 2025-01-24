"use client";

import { SetStateAction, useState } from "react";
import styles from "@/app/ui/rating-components.module.css";

const RatingComponent = () => {
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const handleRating = (rating: number): void => {
        setSelectedRating(rating);
    };
    return (
        <div className="mt-3 flex flex-col">
            <div className="flex items-center justify-between space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                        key={rating}
                        className={`w-10 h-10 rounded-full rating-button text-white ${
                            selectedRating === rating
                                ? styles["selected"]
                                : styles["rating-button"]
                        }`}
                        onClick={() => handleRating(rating)}
                    >
                        {rating}
                    </button>
                ))}
            </div>
            <button className={`mt-3 p-2 ${styles["submit"]} rounded-full`}>SUBMIT</button>
        </div>
    );
};

export default RatingComponent;
