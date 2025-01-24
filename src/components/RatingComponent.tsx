"use client";
import { useState } from "react";
import RatingSelector from "./RatingSelector";
import ThankYou from "./ThankYou";

export default function RatingComponent() {
    const [ratingState, setRatingState] = useState<string>("selector");
    const [numberSelected, setNumberSelected] = useState<number | null>(null);

    const changeState = () => {
        setRatingState("thankyou");
    };
    const changeRating = (rating: number): void => {
        setNumberSelected(rating);
    };
    return (
        <div className="ranking-container">
            {ratingState === "selector" ? (
                <RatingSelector
                    onSubmitRating={changeState}
                    number={numberSelected}
                    onRatingChange={changeRating}
                />
            ) : (
                <ThankYou number={numberSelected} />
            )}
        </div>
    );
}
