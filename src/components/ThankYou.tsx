import styles from "@/app/ui/rating-components.module.css";
import illustration from "../../public/illustration-thank-you.svg";
import Image from "next/image";

export default function ThankYou({ number }: any) {
    return (
        <div className="flex flex-col items-center justify-center  text-center">
            <Image
                src={illustration}
                width={200}
                height={200}
                alt="Illustration Thank you"
                unoptimized
            />
            <h2
                className={`bg-gray-700 rounded-full ${styles["text-orange"]} flex p-1 pl-4 pr-4 mt-5 items-center justify-center`}
            >
                You selected {number} out of 5
            </h2>
            <h1 className="mt-4 white-text text-xl font-bold">Thank You!</h1>
            <h2 className="mt-4 light-gray-text text-sm">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </h2>
        </div>
    );
}
