import Image from "next/image";
import iconStar from "../../public/icon-star.svg";
export default function Home() {
    return (
      <div className="ranking-container">
            {/* <-- Rating state start --> */}
            <Image
              src={iconStar}
              width={40}
              height={40}
              alt="Icon Star"
              unoptimized
            />
            <h2 >
              How did we do? Please let us know how we did with your support
              request. All feedback is appreciated to help us improve our
              offering! 1 2 3 4 5 Submit
            </h2>
            
            {/* <-- Rating state end --> */}
            {/* <-- Thank you state start --> */}

            <div>
              You selected out of 5 Thank you! We appreciate you taking the time
              to give a rating. If you ever need more support, don’t hesitate to
              get in touch!
            </div>
            
            {/* <-- Thank you state end --> */}
            <div className="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Your Name Here</a>.
            </div>
    </div>
    );
}
