import amanda from "../../assets/images/amanda2.jpg";

const MeetAmanda = () => {
  return (
    <>
      <h2 className="text-center text-3xl p-10">
        Meet Amanda, the framing expert
      </h2>
      <div className="flex flex-row-reverse m-10">
        <img
          src={amanda}
          alt="Amanda framing artwork"
          width="500"
          height="500"
          className="shadow-xl"
        />
        <div className="p-10">
          <p className="mb-5">
            Amanda is a distinguished frame maker based in Marlborough, bringing
            over 15 years of expertise to her craft. Her dedication to providing
            personalized service ensures that every customer receives meticulous
            attention, whether they need a single photo mounted or an entire
            exhibition framed.
          </p>
          <p className="mb-5">
            A true creative at heart, Amanda possesses a sharp eye for selecting
            the perfect frames, mounts, and colors to complement each piece of
            artwork and its intended display setting. She thrives on challenges,
            which has led her to frame a diverse array of unique and delicate
            items, including memory boxes and large, fragile ceramic sculptures.
          </p>
          <p>
            Amanda&#39;s passion and pride in her work are evident in every
            project she undertakes, making her a trusted choice for anyone
            seeking exceptional framing services.
          </p>
        </div>
      </div>
    </>
  );
};

export default MeetAmanda;
