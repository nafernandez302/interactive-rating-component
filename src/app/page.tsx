import Image from "next/image";
import iconStar from "../../public/icon-star.svg";
import { Overpass } from "next/font/google";
import RatingComponent from "@/components/RatingComponent";

export default function Home() {
    return (
      <div className="ranking-container">
            {/* <-- Rating state start --> */}
            <Image
              className="bg-gray-700 p-2 rounded-full"
              src={iconStar}
              width={25}
              height={25}
              alt="Icon Star"
              unoptimized
            />
            <h1 className=" mt-4 white-text text-xl font-bold" >
              How did we do?
            </h1>
            <h2 className=" mt-4 light-gray-text text-sm"> Please let us know how we did with your support
              request. All feedback is appreciated to help us improve our
              offering!
            </h2>
            <RatingComponent/>
            
            {/* <-- Rating state end --> */}
            {/* <-- Thank you state start --> */}

            {/* <div>
              You selected out of 5 Thank you! We appreciate you taking the time
              to give a rating. If you ever need more support, don’t hesitate to
              get in touch!
            </div> */}
            
            {/* <-- Thank you state end --> */}
    </div>
    );
}
