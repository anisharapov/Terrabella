import heroImg from '../../assets/images/loop_Kyrgyzstan1_converted.jpg'

export const Hero = () => {
  return (
    <article className="hero">
        <img src={heroImg} alt="hero" className="hero__img" />
    </article>
  );
}