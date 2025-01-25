"use client";
import Image from "next/image";
import iconStar from "../../public/icon-star.svg";
import styles from "@/app/ui/rating-components.module.css";

type RatingSelectorProps = {
    onSubmitRating: (rating:number | null) => void;
    onRatingChange: (rating:number | null) => void;
    number: number | null;
}
const RatingSelector = ({ onSubmitRating, onRatingChange, number }: RatingSelectorProps) => {
    const handleStarClick = (rating: number | null) => {
        onRatingChange(rating);
    };
    return (
        <>
            <Image
                className="bg-gray-700 p-2 rounded-full"
                src={iconStar}
                width={25}
                height={25}
                alt="Icon Star"
                unoptimized
            />
            <h1 className="mt-4 white-text text-xl font-bold">
                How did we do?
            </h1>
            <h2 className=" mt-4 light-gray-text text-sm">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </h2>
            <div className="mt-3 flex flex-col">
                <div className="flex items-center justify-between space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                            key={rating}
                            className={`w-10 h-10 rounded-full rating-button text-white ${
                                number === rating
                                    ? styles["selected"]
                                    : styles["rating-button"]
                            }`}
                            onClick={() => handleStarClick(rating)}
                        >
                            {rating}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => onSubmitRating(number)}
                    className={`mt-3 p-2 ${styles["submit"]} rounded-full`}
                    disabled={number === null}
                >
                    SUBMIT
                </button>
            </div>
        </>
    );
};

export default RatingSelector;
