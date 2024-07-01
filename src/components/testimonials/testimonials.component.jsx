import "./testimonials.styles.css";

import useWindowSize from "../../hooks/useWindowSize";

const Testimonials = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div
      className={
        isMobile
          ? "testimonials-container flex flex-col"
          : "testimonials-container testimonial-grid"
      }
    >
      <div className={isMobile ? "testimonial-card mb-8" : "testimonial-card"}>
        <div className="testimonial-avatar drop-shadow-lg">NH</div>
        <p className="font-bold mb-1 text-right">Nigel Hudson</p>
        <p className="text-right text-yellow-300 pb-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </p>
        {isMobile ? (
          <p className="text-justify">
            Amanda understands that a frame can either make or break an artwork.
            She bring a sensitivity to her craft that gives her the edge over
            their competitors.
          </p>
        ) : (
          <p className="text-justify">
            I always believed that as an artist, I knew the best way to display
            my work. That was until I was introduced to Overton Framing in
            Marlborough. Amanda understands that a frame can either make or
            break an artwork. She bring a sensitivity to her craft that gives
            her the edge over their competitors. When my work leaves the studio,
            it is transformed into a piece of furniture that would grace any
            interior.
          </p>
        )}
      </div>
      <div className={isMobile ? "testimonial-card mb-8" : "testimonial-card"}>
        <div className="testimonial-avatar drop-shadow-lg">DN</div>
        <p className="font-bold mb-1 text-right">Diana Neale</p>
        <p className="text-right text-yellow-300 pb-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </p>
        {isMobile ? (
          <p className="text-justify">
            Her work is excellent and she has a very good eye. She is very
            accommodating, and I find her help when choosing styles of mounting
            and framing invaluable.
          </p>
        ) : (
          <p className="text-justify">
            I can highly recommend Amanda when you are looking for a good framer
            for your pictures. I am an artist and, as such, the quality of
            framing is very important to me. Her work is excellent in terms of
            the accuracy of construction and she has a very good eye. She is
            very accommodating, and I find her help when choosing styles of
            mounting and framing invaluable.
          </p>
        )}
      </div>
      <div className={isMobile ? "testimonial-card mb-5" : "testimonial-card"}>
        <div className="testimonial-avatar drop-shadow-lg">DM</div>
        <p className="font-bold mb-1 text-right">Dan Myddleton</p>
        <p className="text-right text-yellow-300 pb-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </p>
        {isMobile ? (
          <p className="text-justify">
            Amanda's expertise showed me that a frame can either elevate or
            diminish a piece of art. Her attention to detail and craftsmanship
            truly set her apart.
          </p>
        ) : (
          <p className="text-justify">
            Amanda's expertise showed me that a frame can either elevate or
            diminish a piece of art. Her attention to detail and craftsmanship
            truly set her apart. When I had a painting framed by her, it emerged
            from the studio as a stunning piece that enhances the ambiance of
            any room. Her work is nothing short of transformative.
          </p>
        )}
      </div>
    </div>
  );
};
export default Testimonials;
