import Image from "next/image";
import starImage from "../../public/assets/img/star.svg"
const TestimonialSlide = ({ clName, clDesignation, review, star }) => {
    const numStars = parseInt(star);

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= numStars) {
                stars.push(
                    <Image
                        key={i}
                        src={starImage}
                        alt="star rating"
                        width="24"
                        height="24"
                    />
                );
            }
        }
        return stars;
    };

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h3>{clName}</h3>
                        <p>{clDesignation}</p>
                    </div>
                    <div className="card-text">
                        <div className="star">{renderStars()}</div>
                        <p>{review}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialSlide;
